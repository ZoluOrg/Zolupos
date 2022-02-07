using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Core.DTO;
using Zolupos.Modules.Employee.Core.Entity;

namespace Zolupos.Modules.Employee.Core.Queries
{
    public record class GetAllEmployees () : IRequest<ICollection<EmployeesDTO>>;
}
