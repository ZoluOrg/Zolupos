using Microsoft.AspNetCore.Mvc;
using Zolupos.Application.Features.Authentication;

namespace Zolupos.Server.Controllers.Authentication
{
    public class AuthenticationController : ApiControllerBase
    {
        [HttpPost]
        public async Task<ActionResult> GetToken(AuthenticateCommand command)
        {
            var token = await Mediator.Send(command);
            return Ok(token);
        }
    }
}
