using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace Zolupos.Modules.Transaction.Core.Extension
{
    public static class Extension
    {
        public static IServiceCollection AddTransactionCoreModule (this IServiceCollection services)
        {
            var asm = Assembly.GetExecutingAssembly();
            Console.Write($"{asm.FullName}");
            services.AddMediatR(asm);
            return services;
        }
    }
}
