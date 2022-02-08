using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Core.Entity;
using Zolupos.Shared.Core.Session.Command;
using Zolupos.Shared.Core.Session.Entity;
using Zolupos.Shared.Core.Session.Interface;

namespace Zolupos.Shared.Core.Session.Handler
{
    public class LoginHandler : IRequestHandler<LoginCommand, string>
    {
        private ISessionDbContext _context;
        public LoginHandler(ISessionDbContext context)
        {
            _context = context;
        }

        public async Task<string> Handle(LoginCommand request, CancellationToken cancellationToken)
        {
            var sessionId = Guid.NewGuid().ToString();
            var employee = JsonSerializer.Deserialize<Employees>(request.employee);
            var session = new Sessions
            {
                Employee = employee,
                SessionId = sessionId
            };
            await _context.Sessions.AddAsync(session);
            await _context.SaveChanges();
            return sessionId;
        }
    }
}
