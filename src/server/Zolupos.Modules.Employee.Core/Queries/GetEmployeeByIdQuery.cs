using MediatR;
using Zolupos.Modules.Employee.Core.Entity;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Employee.Core.Queries;

public record GetEmployeeByIdQuery(int id) : IRequest<ResultWrapper<Employees>>;