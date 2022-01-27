using Microsoft.Extensions.DependencyInjection;
using Zolupos.Modules.Inventory.Core.Interface;
using Zolupos.Modules.Inventory.Infrastructure.Context;
using Zolupos.Shared.Infrustructure.Services;

namespace Zolupos.Modules.Inventory.Infrastructure.Extension
{
    public static class Extension
    {
        public static IServiceCollection AddInventoryInfrastructureModule(this IServiceCollection services)
        {
            services.AddDatabase<InventoryDbContext>();
            services.AddScoped<IInventoryDbContext>(prov => prov.GetService<InventoryDbContext>());
            return services;
        }
    }
}

