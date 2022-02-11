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

namespace Zolupos.Modules.Authentication.Core.Handler
{
    public  class AuthenticateHandler : IRequestHandler<AuthenticateCommand, AuthResponse>
    {
        private readonly IEmployeeDbContext _context;
        private readonly Settings _settings;
        public AuthenticateHandler(IEmployeeDbContext context, IOptions<Settings> settings)
        {
            _context = context;
            _settings = settings.Value;
        }

        public async Task<AuthResponse> Handle(AuthenticateCommand request, CancellationToken cancellationToken)
        {
            var employee = await _context.Employees.SingleOrDefaultAsync(emp => emp.PinHashed == request.model.Pin);
            throw new NotImplementedException();
        }
    }
}
