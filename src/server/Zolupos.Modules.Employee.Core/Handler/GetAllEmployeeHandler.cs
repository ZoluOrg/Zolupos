using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Core.DTO;
using Zolupos.Modules.Employee.Core.Entity;
using Zolupos.Modules.Employee.Core.Queries;
using Zolupos.Modules.Employee.Infrastructure.Context;

namespace Zolupos.Modules.Employee.Core.Handler
{
    public class GetAllEmployeeHandler : IRequestHandler<GetAllEmployeesQuery, ICollection<EmployeesDTO>>
    {
        private readonly IMapper _mapper;
        private readonly IEmployeeDbContext _context;
        public GetAllEmployeeHandler(IMapper mapper, IEmployeeDbContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<ICollection<EmployeesDTO>> Handle(GetAllEmployeesQuery request, CancellationToken cancellationToken)
        {
            var employees = await _context.Employees.ToListAsync();
            var mapped = _mapper.Map<ICollection<EmployeesDTO>>(employees);
            return mapped;
        }
    }
}
