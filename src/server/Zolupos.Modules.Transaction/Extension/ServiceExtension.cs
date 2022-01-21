using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Zolupos.Modules.Transaction.Core.Extension;
using Zolupos.Modules.Transaction.Infrustructure.Extension;

namespace Zolupos.Modules.Transaction.Extension
{
    public static class ServiceExtension
    {
        public static IServiceCollection AddTransactionModule (this IServiceCollection services)
        {
            services.AddTransactionModuleCore();
            services.AddTransactionModuleInfrustructure();
            return services;
        }
    }
}
