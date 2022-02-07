using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Core.Extension;
using Zolupos.Modules.Employee.Infrastructure.Extension;

namespace Zolupos.Modules.Employee.Extension
{
    public static class Extension
    {
        public static IServiceCollection AddEmployeeModule(this IServiceCollection services)
        {
            services.AddEmployeeCoreModule();
            services.AddEmployeeInfrastructureModule();
            return services;
        }
    }
}
