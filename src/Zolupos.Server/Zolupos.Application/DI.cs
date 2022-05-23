using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Abstractions;
using Zolupos.Application.Common.Interface;
using Zolupos.Application.Infrastructure.Context;

namespace Zolupos.Application
{
    public static class DI
    {
        public static IServiceCollection UseZoluposApplication (this IServiceCollection serviceCollection)
        {
            serviceCollection.AddPostgresDB<ApplicationDbContext>();
            serviceCollection.AddTransient<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext>());
            return serviceCollection;
        }
    }
}
