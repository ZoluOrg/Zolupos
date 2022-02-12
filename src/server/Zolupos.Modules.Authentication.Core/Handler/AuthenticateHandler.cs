using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Authentication.Core.Command;
using Zolupos.Modules.Authentication.Core.Model;
using Zolupos.Modules.Employee.Infrastructure.Context;
using Zolupos.Modules.Authentication.Core.Services;

namespace Zolupos.Modules.Authentication.Core.Handler
{
    public class AuthenticateHandler : IRequestHandler<AuthenticateCommand, AuthResponse>
    {
        private readonly IEmployeeDbContext _context;
        public AuthenticateHandler(IEmployeeDbContext context)
        {
            _context = context;
        }

        public async Task<AuthResponse> Handle(AuthenticateCommand request, CancellationToken cancellationToken)
        {
            Console.WriteLine($"In Handler: {request.settings.Secret}");
            var employee = await _context.Employees.SingleOrDefaultAsync(emp => emp.PinHashed == request.model.Pin);
            if (employee == null) return null;
            var token = await AuthenticationService.GenerateToken(employee, request.settings);
            return new AuthResponse(employee, token);
        }
    }
}
