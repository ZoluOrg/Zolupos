using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Inventory.Core.Extension
{
    public static class Extension
    {
        public static IServiceCollection AddInventoryCoreModule(this IServiceCollection services)
        {
            return services;
        }
    }
}
