using CruelSummer.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using PaperRings;
using System.Text;
{
    var builder = WebApplication.CreateBuilder(args);
    builder.Services.AddPaperRings();

    var settingSection = builder.Configuration.GetSection("Settings");
    builder.Services.Configure<Settings>(settingSection);
    var settings = settingSection.Get<Settings>();
    var keyByte = Encoding.ASCII.GetBytes(settings.TokenSalt);

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

    var app = builder.Build();
    app.MapGet("/", () => "Hola");
    app.MapGraphQL();
    app.UseAuthentication();
    app.Run();

}