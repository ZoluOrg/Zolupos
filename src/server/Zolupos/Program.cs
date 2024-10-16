using Zolupos.Modules.Inventory.Extension;
using Zolupos.Modules.Employee.Extension;
using Zolupos.Shared.Core.Model;
using Zolupos.Modules.Authentication.Extension;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Zolupos.Modules.Transactions.Configuration;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Service Configuration. Like DI stuffs
{
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    builder.Services.AddInventoryModule();
    builder.Services.UseTransaction();
    builder.Services.AddEmployeeModule();
    builder.Services.AddAuthenticationModule();

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


{
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();
    app.UseStaticFiles(new StaticFileOptions
    {
        FileProvider = new PhysicalFileProvider(Path.Combine(builder.Environment.ContentRootPath, "Zolupos.Static")),
        RequestPath = "/Zolupos.Static"
    }); ;

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
