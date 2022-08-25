using PaperRings;

{
    var builder = WebApplication.CreateBuilder(args);

    builder.Services.AddPaperRings();

    var app = builder.Build();

    app.MapGet("/", () => "Hello World!");

    app.MapGraphQL();

    app.Run();

}