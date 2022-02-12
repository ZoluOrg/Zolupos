using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Zolupos.Modules.Authentication.Core.Annotation;
using Zolupos.Modules.Authentication.Core.Command;
using Zolupos.Shared.Core.Model;

namespace Zolupos.Modules.Authentication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IMediator _mediator;
        private readonly Settings _settings;
        public AuthController(IMediator mediator, IOptions<Settings> settings)
        {
            Console.WriteLine(settings.Value.Secret);
            _mediator = mediator;
            _settings = settings.Value;
        }
        [HttpPost]
        public async Task<ActionResult> Get(AuthRequest request)
        {
            var result = await _mediator.Send(new AuthenticateCommand(request, _settings));
            if (result == null) return BadRequest();
            return Ok(result);
        }
    }
}
