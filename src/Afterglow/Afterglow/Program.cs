using LondonBoy.Model;
using TheArcher;

var builder = WebApplication.CreateBuilder(args);
var settings = builder.Configuration.GetSection("Settings");

builder.Services.Configure<Settings>(settings);

builder.Services.AddTheArcher();

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGraphQL();

app.Run();
