﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Authentication.Core.Annotation;
using Zolupos.Modules.Authentication.Core.Model;
using Zolupos.Shared.Core.Model;

namespace Zolupos.Modules.Authentication.Core.Command
{
    public record AuthenticateCommand(AuthRequest model, Settings settings) : IRequest<AuthResponse>;
}
