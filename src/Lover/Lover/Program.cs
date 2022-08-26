using CruelSummer.Models;
using PaperRings;

{
    var builder = WebApplication.CreateBuilder(args);
    builder.Services.AddPaperRings();
    var settingSection = builder.Configuration.GetSection("Settings");
    builder.Services.Configure<Settings>(settingSection);

    var app = builder.Build();
    app.MapGet("/", () => "Hola");
    app.MapGraphQL();
    app.UseAuthentication();
    app.UseAuthorization();
    app.Run();

}