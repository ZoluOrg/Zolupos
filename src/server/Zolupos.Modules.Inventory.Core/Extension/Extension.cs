using Microsoft.Extensions.DependencyInjection;
using MediatR;
using System;
using System.Reflection;
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
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddMediatR(Assembly.GetExecutingAssembly());
            return services;
        }
    }
}
