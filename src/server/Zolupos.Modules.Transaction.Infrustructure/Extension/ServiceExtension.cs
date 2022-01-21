using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transaction.Infrustructure.Contexts;
using Zolupos.Shared.Infrustructure.Services;

namespace Zolupos.Modules.Transaction.Infrustructure.Extension
{
    public static class ServiceExtension
    {
        public static IServiceCollection AddTransactionModuleInfrustructure(this IServiceCollection serviceCollection)
        {
            Console.WriteLine("Adding Transaction Infrustructure Module");
            serviceCollection.AddDatabase<TransactionDbContext>();
            return serviceCollection;
        }
    }
}
