using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Core.Command;
using Zolupos.Modules.Employee.Core.Entity;
using Zolupos.Modules.Employee.Infrastructure.Context;

namespace Zolupos.Modules.Employee.Core.Handler
{
    public class AddEmployeeHandler : IRequestHandler<AddEmployeeCommand, int>
    {
        private readonly IEmployeeDbContext _context;
        private readonly IMapper _mapper;
        public AddEmployeeHandler(IEmployeeDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<int> Handle(AddEmployeeCommand request, CancellationToken cancellationToken)
        {
            var employee = _mapper.Map<Employees>(request.employeeRequest);
            await _context.Employees.AddAsync(employee);
            await _context.SaveChanges();
            return employee.Id;
        }
    }
}
