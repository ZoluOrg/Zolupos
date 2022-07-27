using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Net;
using System.Text;
using Zolupos.Application;
using Zolupos.Application.Middleware;
using Zolupos.Shared.Model;

var builder = WebApplication.CreateBuilder(args);

{
    System.Net.ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen(opts => {
        opts.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
        {
            Description = "JWT Token To Authenticate Controllers",
            Name = "Authorization",
            In = ParameterLocation.Header,
            Type = SecuritySchemeType.ApiKey
        });
        opts.AddSecurityRequirement(new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Reference = new OpenApiReference
                    {
                        Id = "Bearer",
                        Type = ReferenceType.SecurityScheme
                    }
                }, new List<string>()
            }
        });
    });

    builder.Services.AddTransient<ExceptionHandler>();

    builder.Services.UseZoluposApplication();   

    var settingSection = builder.Configuration.GetSection("Settings");
    builder.Services.Configure<Settings>(settingSection);

    var settings = settingSection.Get<Settings>();
    var keyByte = Encoding.ASCII.GetBytes(settings.Secret);

    builder.Services.AddAuthentication(auth =>
    {
        auth.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        auth.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    }).AddJwtBearer(bearer =>
    {
        bearer.RequireHttpsMetadata = true;
        bearer.SaveToken = true;
        bearer.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(keyByte),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

    builder.Services.AddAuthorization(options =>
    {
        options.FallbackPolicy = new AuthorizationPolicyBuilder()
            .RequireAuthenticatedUser()
            .Build();
    });

}

var app = builder.Build();

// Configure the HTTP request pipeline.
{
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();

    app.MapControllers();

    app.UseRouting();

    app.UseAuthentication();

    app.UseAuthorization();

    app.UseMiddleware<ExceptionHandler>();

    app.UseStaticFiles(new StaticFileOptions
    {
        FileProvider = new PhysicalFileProvider(
            Path.Combine(builder.Environment.ContentRootPath, "Static")),
        RequestPath = "/static"
    });

    app.UseCors(cors =>
    {
        cors.AllowAnyOrigin();
        cors.AllowAnyMethod();
        cors.AllowAnyHeader();
    });

    app.Run();
}

