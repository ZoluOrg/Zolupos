using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Infrastructure.Context;
using Zolupos.Shared.Infrustructure.Services;

namespace Zolupos.Modules.Employee.Infrastructure.Extension
{
    public static class Extension
    {
        public static IServiceCollection AddEmployeeInfrastructureModule (this IServiceCollection services)
        {
            services.AddDatabase<EmployeeDbContext>();
            services.AddScoped<IEmployeeDbContext>(prov => prov.GetService<EmployeeDbContext>());
            return services;
        }
    }
}
