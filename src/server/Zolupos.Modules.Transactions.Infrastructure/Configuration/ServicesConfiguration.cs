using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transactions.Core.Interfaces;
using Zolupos.Modules.Transactions.Infrastructure.Context;
using Zolupos.Shared.Infrustructure.Services;

namespace Zolupos.Modules.Transactions.Infrastructure.Configuration
{
    public static class ServicesConfiguration
    {
        public static IServiceCollection UseTransactionInfrastructure(this IServiceCollection services)
        {
            services.AddDatabase<TransactionsContext>();
            services.AddScoped<ITransactionsContext>(prov => prov.GetService<TransactionsContext>());
            return services;
        }
    }
}
