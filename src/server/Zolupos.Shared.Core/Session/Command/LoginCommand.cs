using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Core.Entity;

namespace Zolupos.Shared.Core.Session.Command
{
    public record LoginCommand (string employee) : IRequest<string>;
}
