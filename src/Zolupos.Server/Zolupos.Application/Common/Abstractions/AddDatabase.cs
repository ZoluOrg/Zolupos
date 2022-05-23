using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Npgsql;

namespace Zolupos.Application.Common.Abstractions
{
    public static class AddDatabase
    {
        public static IServiceCollection AddPostgresDB<T>(this IServiceCollection services) where T : DbContext
        {
            services.AddDbContext<T>(op => op.UseNpgsql("Host=Localhost;Database=Zolupos.Database;Username=postgres;Password=postgres7207"));
            return services;
        }

    }
}
