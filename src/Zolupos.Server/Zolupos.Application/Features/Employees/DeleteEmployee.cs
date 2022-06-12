using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Employees
{
    public record DeleteEmployeeCommand (int Id) : IRequest<ResultWrapper<Employee>>;
    public class DeleteEmployeeHandler : IRequestHandler<DeleteEmployeeCommand, ResultWrapper<Employee>>
    {
        private IApplicationDbContext _context;
        public DeleteEmployeeHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ResultWrapper<Employee>> Handle(DeleteEmployeeCommand request, CancellationToken cancellationToken)
        {
            var employeeToDelete = await _context.Employees.Where(employee => employee.EmployeeId == request.Id).FirstAsync();
            _context.Employees.Remove(employeeToDelete);
            await _context.SaveChangesAsync();

            return new ResultWrapper<Employee> { Receive = employeeToDelete, Message = ""};
        }
    }
}
