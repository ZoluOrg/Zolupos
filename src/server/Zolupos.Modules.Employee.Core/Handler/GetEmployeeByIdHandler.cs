using System.Net;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Employee.Core.Entity;
using Zolupos.Modules.Employee.Core.Queries;
using Zolupos.Modules.Employee.Infrastructure.Context;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Employee.Core.Handler;

public class GetEmployeeByIdHandler : IRequestHandler<GetEmployeeByIdQuery, ResultWrapper<Employees>>
{
    private readonly IEmployeeDbContext _context;
    private readonly IMapper _mapper;

    public GetEmployeeByIdHandler(IEmployeeDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<ResultWrapper<Employees>> Handle(GetEmployeeByIdQuery request, CancellationToken cancellationToken)
    {
        var employee = await _context.Employees.SingleOrDefaultAsync(e => e.Id == request.id);
        return new ResultWrapper<Employees>(){Data = employee, Code = HttpStatusCode.OK, Message = ""};
    }
}