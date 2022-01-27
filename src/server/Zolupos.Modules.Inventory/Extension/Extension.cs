using Microsoft.Extensions.DependencyInjection;
using Zolupos.Modules.Inventory.Core.Extension;
using Zolupos.Modules.Inventory.Infrastructure.Extension;

namespace Zolupos.Modules.Inventory.Extension
{
    public static class Extension
    {
        public static IServiceCollection AddInventoryModule(this IServiceCollection services)
        {
            services.AddInventoryCoreModule();
            services.AddInventoryInfrastructureModule();
            return services;
        }
    }
}
