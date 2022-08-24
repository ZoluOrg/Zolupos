using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheArcher.Abstraction;
using TheArcher.Context;
using TheArcher.Queries;

namespace TheArcher
{
    public static class Extension
    {
        public static IServiceCollection AddTheArcher(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddDb<ApplicationDbContext>();
            serviceCollection.AddGraphQLServer().RegisterDbContext<ApplicationDbContext>()
                .AddQueryType<EmployeeQuery>();
            return serviceCollection;
        }
    }
}
