using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;

namespace Zolupos.Modules.Authentication.Core.Extension
{
    public static class Extension
    {
        public static IServiceCollection AddAuthenticationCoreModule(this IServiceCollection services)
        {
            services.AddMediatR(Assembly.GetExecutingAssembly());
            return services; 
        }
    }
}
