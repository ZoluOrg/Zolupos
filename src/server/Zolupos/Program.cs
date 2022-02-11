using Zolupos.Modules.Transaction.Extension;
using Zolupos.Modules.Inventory.Extension;
using Zolupos.Modules.Employee.Extension;
using Zolupos.Shared.Core.Model;
using Zolupos.Shared.Core.Middleware;
using Zolupos.Modules.Authentication.Extension;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransactionModule();
builder.Services.AddInventoryModule();
builder.Services.AddEmployeeModule();
builder.Services.AddAuthenticationModule();

// DI settings
builder.Services.Configure<Settings>(builder.Configuration.GetSection("Settings"));

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseMiddleware<AuthMiddleware>();

app.MapControllers();

app.Run();