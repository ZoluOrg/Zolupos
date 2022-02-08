using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.InMemory;
using Microsoft.Extensions.DependencyInjection;

namespace Zolupos.Shared.Infrustructure.Services
{
    public static class AddDatabaseContext
    {
        /// <summary>
        /// Add new database to database with preconfigured host
        /// </summary>
        /// <typeparam name="T">Database Context</typeparam>
        /// <param name="services">Services to extend to</param>
        /// <returns></returns>
        public static IServiceCollection AddDatabase<T>(this IServiceCollection services) where T : DbContext
        {            
            services.AddDbContext<T>(op => op.UseNpgsql("Host=Localhost;Database=zolupos;Username=postgres;Password=postgres7207"));
            return services;
        }

        public static IServiceCollection AddMemoryDatabase<T>(this IServiceCollection services) where T : DbContext
        {
            services.AddDbContext<T>(op => op.UseInMemoryDatabase(Guid.NewGuid().ToString()));
            return services;
        }
    }
}
