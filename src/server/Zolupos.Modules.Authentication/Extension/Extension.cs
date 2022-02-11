using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Authentication.Core.Extension;

namespace Zolupos.Modules.Authentication.Extension
{
    public static class Extension
    {
        public static IServiceCollection AddAuthenticationModule(this IServiceCollection services)
        {
            services.AddAuthenticationCoreModule();
            return services;
        }
    }
}
