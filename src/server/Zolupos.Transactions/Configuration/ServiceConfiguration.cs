using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Transactions.Core.Configuration;
using Zolupos.Transactions.Infrastructure.Configuration;

namespace Zolupos.Transactions.Configuration
{
    public static class ServiceConfiguration
    {
        public static IServiceCollection UseTransaction (this IServiceCollection services)
        {
            services.UseTransactionCore();
            services.UseTransactionInfrastructure();
            return services;
        }
    }
}
