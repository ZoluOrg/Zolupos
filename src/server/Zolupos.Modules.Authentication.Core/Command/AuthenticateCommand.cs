using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Authentication.Core.Annotation;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Authentication.Core.Command
{
    public record AuthenticateCommand(AuthenticateRequest authenticateRequest) : IRequest<ResultWrapper<string>>;
}
