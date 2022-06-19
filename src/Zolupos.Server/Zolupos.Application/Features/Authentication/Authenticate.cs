using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;
using Zolupos.Application.Services;
using Zolupos.Shared.Models;

namespace Zolupos.Application.Features.Authentication
{
    public class AuthenticateCommand : IRequest<ResultWrapper<AuthenticateResponse>>
    {
        public string FullName { get; set; }
        public int Pin { get; set; }
    }
    public class AuthenticateResponse
    {
        public string RequestedToken { get; set; }
        public Employee Employee { get; set; }
    }
    public class AuthenticateHandler : IRequestHandler<AuthenticateCommand, ResultWrapper<AuthenticateResponse>>
    {
        private IApplicationDbContext _context;
        private Settings _settings;
        public AuthenticateHandler(IApplicationDbContext context, IOptions<Settings> settings)
        {
            _context = context;
            _settings = settings.Value;
        }

        public async Task<ResultWrapper<AuthenticateResponse>> Handle(AuthenticateCommand request, CancellationToken cancellationToken)
        {
            var employee = await _context.Employees.Where(employee => employee.FullName == request.FullName && employee.Pin == request.Pin).FirstAsync();
            var token = await AuthenticationService.GenerateToken(employee, _settings);
            var response = new AuthenticateResponse
            {
                RequestedToken = token,
                Employee = employee
            };
            return new ResultWrapper<AuthenticateResponse> { Message = "", Receive = response };
        }
    }
}
