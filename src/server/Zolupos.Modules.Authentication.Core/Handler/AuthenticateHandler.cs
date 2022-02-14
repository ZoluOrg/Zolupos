using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Authentication.Core.Command;
using Zolupos.Modules.Authentication.Core.Services;
using Zolupos.Modules.Employee.Infrastructure.Context;
using Zolupos.Shared.Core.Model;

namespace Zolupos.Modules.Authentication.Core.Handler
{
    public class AuthenticateHandler : IRequestHandler<AuthenticateCommand, string>
    {
        public readonly IEmployeeDbContext _context;
        public readonly Settings _settings;

        public AuthenticateHandler(IEmployeeDbContext context, IOptions<Settings> settings)
        {
            _context = context;
            _settings = settings.Value;
        }

        public async Task<string> Handle(AuthenticateCommand request, CancellationToken cancellationToken)
        {
            var authRequest = request.authenticateRequest;
            var employee = await _context.Employees.SingleOrDefaultAsync(e => e.PinHashed == authRequest.Pin && e.FirstName == authRequest.FirstName);
            if (employee == null) return null;
            var token = await AuthService.GenerateToken(employee, _settings);
            return token;
        }
    }
}
