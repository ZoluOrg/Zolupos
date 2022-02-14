using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Authentication.Core.Annotation;

namespace Zolupos.Modules.Authentication.Core.Command
{
    public record AuthenticateCommand(AuthenticateRequest authenticateRequest) : IRequest<string>;
}
