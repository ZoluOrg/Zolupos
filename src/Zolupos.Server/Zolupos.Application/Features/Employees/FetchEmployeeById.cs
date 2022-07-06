using AutoMapper;
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
using Zolupos.Shared.Model;

namespace Zolupos.Application.Features.Employees
{
    public record FetchEmployeeByIdQuery(int Id) : IRequest<ResultWrapper<Employee>>;
    public class FetchEmployeeByIdHandler : IRequestHandler<FetchEmployeeByIdQuery, ResultWrapper<Employee>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;
        public FetchEmployeeByIdHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ResultWrapper<Employee>> Handle(FetchEmployeeByIdQuery request, CancellationToken cancellationToken)
        {
            var employee = await _context.Employees.Where(employee => employee.EmployeeId == request.Id).FirstOrDefaultAsync();
            if (employee == null) throw new CustomError(Message: "Employee does not exist", Errors: "", StatusCode: System.Net.HttpStatusCode.NotFound);
            return new ResultWrapper<Employee> { Receive = employee, Message = "" };
        }
    }
}
