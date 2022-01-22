using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Zolupos.Shared.Infrustructure.Services
{
    public static class AddDatabaseContext
    {
        public static IServiceCollection AddDatabase<T>(this IServiceCollection services) where T : DbContext
        {
            Console.WriteLine($"Adding Database {typeof(T)}");
            services.AddDbContext<T>(op => op.UseNpgsql("Host=Localhost;Database=zolupos;Username=postgres;Password=postgres7207"));
            return services;
        }
    }
}
