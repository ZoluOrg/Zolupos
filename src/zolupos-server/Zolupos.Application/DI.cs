using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;
using Zolupos.Application.Common.Abstractions;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Infrastructure.Context;
using Zolupos.Application.Queries;

namespace Zolupos.Application
{
    public static class DI
    {
        public static IServiceCollection UseZoluposApplication(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddPostgresDB<ApplicationDbContext>();
            serviceCollection.AddTransient<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext>());
            serviceCollection.AddAutoMapper(Assembly.GetExecutingAssembly());
            serviceCollection.AddMediatR(Assembly.GetExecutingAssembly());
            serviceCollection.AddIdentity<IdentityUser, IdentityRole>().AddEntityFrameworkStores<ApplicationDbContext>();
            return serviceCollection;
        }
    }
}
