using AutoMapper;
using MediatR;
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
    public class AddEmployeeCommand : IRequest<ResultWrapper<int>>
    {
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public int Pin { get; set; }
        public string Role { get; set; }
        public int PhoneNumber { get; set; }
        public DateTime LastLogin { get; set; }
    }
    public class AddEmployeeHandler : IRequestHandler<AddEmployeeCommand, ResultWrapper<int>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;
        public AddEmployeeHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
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
