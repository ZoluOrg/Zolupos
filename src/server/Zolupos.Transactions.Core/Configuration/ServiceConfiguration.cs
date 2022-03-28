using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Transactions.Core.Configuration
{
    public static class ServiceConfiguration
    {
        public static IServiceCollection UseTransactionCore (this IServiceCollection services)
        {
            return services;
        }
    }
}
