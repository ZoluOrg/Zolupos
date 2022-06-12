using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Enums;
using Zolupos.Application.Common.Interface;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Employees
{
    public class AddEmployeeCommand : IRequest
    {
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public int Pin { get; set; }
        public string Role { get; set; }
        public int PhoneNumber { get; set; }
        public DateTime LastLogin { get; set; }
    }
    public class AddEmployeeHandler : IRequestHandler<AddEmployeeCommand>
    {
        private UserManager<IdentityUser> _userManager;
        private IMapper _mapper;
        public AddEmployeeHandler(UserManager<IdentityUser> userManager, IMapper mapper)
        {
            _userManager = userManager;
            _mapper = mapper;
        }

        public async Task<ResultWrapper<int>> Handle(AddEmployeeCommand request, CancellationToken cancellationToken)
        {
            var employee = _mapper.Map<Employee>(request);
            employee.FullName = $"{employee.FirstName} {employee.SurName}";
            await _context.Employees.AddAsync(employee);
            await _context.SaveChangesAsync();

            return new ResultWrapper<int> { Receive = employee.EmployeeId, Message = "" };
        }
    }
}
