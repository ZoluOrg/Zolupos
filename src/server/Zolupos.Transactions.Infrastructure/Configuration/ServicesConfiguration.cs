using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Shared.Infrustructure.Services;
using Zolupos.Transactions.Core.Interfaces;
using Zolupos.Transactions.Infrastructure.Context;

namespace Zolupos.Transactions.Infrastructure.Configuration
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
