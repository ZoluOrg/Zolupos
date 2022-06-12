using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Zolupos.Application;
using Zolupos.Shared.Models;

var builder = WebApplication.CreateBuilder(args);

{
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

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
    app.UseCors(cors =>
    {
        cors.AllowAnyOrigin();
        cors.AllowAnyMethod();
        cors.AllowAnyHeader();
    });

    app.Run();
}

