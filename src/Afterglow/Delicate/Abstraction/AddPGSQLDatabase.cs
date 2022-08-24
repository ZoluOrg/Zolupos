using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Npgsql;
using LondonBoy.Model;

namespace TheArcher.Abstraction
{
    public static class AddPGSQLDatabase
    {
        public static IServiceCollection AddDb<T> (this IServiceCollection serviceCollection) where T : DbContext
        {
            serviceCollection.AddDbContext<T>(op => op.UseNpgsql("Host=Localhost;Database=Lover.;Username=postgres;Password=postgres7207"));
            return serviceCollection;
        }
    }
}
