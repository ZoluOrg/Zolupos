using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PaperRings.Context;
using PaperRings.Feature.Employees;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;

namespace PaperRings
{
    public static class Extension
    {
        public static IServiceCollection AddPaperRings(this IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options => options.UseNpgsql("Host=Localhost;Database=Lover.PaperRings.Database;Username=postgres;Password=postgres7207"));
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddGraphQLServer().AddQueryType<EmployeeQueries>().AddMutationType<EmployeeMutation>();
            return services;
        }
    }
}
