using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Authentication.Core.Annotation;
using Zolupos.Modules.Authentication.Core.Command;
using Zolupos.Shared.Core.Model;

namespace Zolupos.Modules.Authentication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : Controller
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
        public async Task<ActionResult<string>> Authenticate(AuthenticateRequest authenticationRequest)
        {
            var token = await _meidator.Send(new AuthenticateCommand(authenticationRequest));
            if (token == null) return BadRequest(new { message = "Missing or Invalid Credentials" });
            return Ok(token);
        }
        
    }
}
