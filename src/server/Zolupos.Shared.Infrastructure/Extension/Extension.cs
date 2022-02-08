using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Shared.Core.Session.Interface;
using Zolupos.Shared.Infrustructure.Services;
using Zolupos.Shared.Infrustructure.Session.Context;

namespace Zolupos.Shared.Infrustructure.Extension
{
    public static class Extension
    {
        public static IServiceCollection AddSharedInfrastructre (this IServiceCollection services)
        {
            services.AddMemoryDatabase<SessionDbContext>();
            services.AddScoped<ISessionDbContext>(prov => prov.GetService<SessionDbContext>());
            return services;
        }
    }
}
