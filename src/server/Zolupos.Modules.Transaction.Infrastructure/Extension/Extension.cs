using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Shared.Infrustructure.Services;
using Zolupos.Modules.Transaction.Infrustructure.Contexts;
using System.Reflection;
using Zolupos.Modules.Transaction.Core.Interface;

namespace Zolupos.Modules.Transaction.Infrustructure.Extension
{
    public static class Extension
    {
        public static IServiceCollection AddTransactionInfrastructureModule(this IServiceCollection services)
        {
            services.AddDatabase<TransactionDbContext>();
            services.AddScoped<ITransactionDbContext>(prov => prov.GetService<TransactionDbContext>());
            return services;
        }
    }
}
