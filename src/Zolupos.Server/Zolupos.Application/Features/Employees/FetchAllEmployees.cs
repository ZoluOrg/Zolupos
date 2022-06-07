using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Employees
{
    public record FetchAllEmployeesQuery (): IRequest<ICollection<Employee>>;
    public class FetchAllEmployeesHandler : IRequestHandler<FetchAllEmployeesQuery, ICollection<Employee>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;
        public FetchAllEmployeesHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ICollection<Employee>> Handle(FetchAllEmployeesQuery request, CancellationToken cancellationToken)
        {
            var employees = await _context.Employees.ToListAsync();
            return employees;
        }
    }
}
