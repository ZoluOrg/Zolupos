using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace Zolupos.Modules.Transaction.Core.Extension
{
    public static class ServiceExtension
    {
        public static IServiceCollection AddTransactionModuleCore(this IServiceCollection services)
        {
            return services;
        }
    }
}
