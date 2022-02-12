using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Core.Annotation;
using Zolupos.Modules.Employee.Core.Entity;

namespace Zolupos.Modules.Employee.Core.Command
{
    public record AddEmployeeCommand(AddEmployeeRequest employeeRequest) : IRequest<int>;
}
