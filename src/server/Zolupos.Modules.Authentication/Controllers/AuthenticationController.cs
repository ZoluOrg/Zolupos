using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Authentication.Core.Annotation;
using Zolupos.Modules.Authentication.Core.Command;
using Zolupos.Shared.Core.Model;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Authentication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {

        private readonly Settings _settings;
        private readonly IMediator _meidator;

        public AuthenticationController(IOptions<Settings> settings, IMediator mediator)
        {
            _settings = settings.Value;
            _meidator = mediator;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Authenticate(AuthenticateRequest authenticationRequest)
        {
            var token = await _meidator.Send(new AuthenticateCommand(authenticationRequest));
            if (token == null)
            {
                Console.WriteLine("error");
                return Unauthorized(token);
            };
            return Ok(token);
        }
        
    }
}
