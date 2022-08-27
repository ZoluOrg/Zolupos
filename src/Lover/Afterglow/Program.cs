using CruelSummer.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using PaperRings;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
{
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

    builder.Services.AddAuthorization();

    builder.Services.AddPaperRings();
}

var app = builder.Build();
{
    app.UseRouting();
    app.UseAuthentication();
    app.UseAuthorization();
    app.UseEndpoints(eps =>
    {
        eps.MapGraphQL();
        eps.MapGraphQLSchema();
    });
    app.Run();
}