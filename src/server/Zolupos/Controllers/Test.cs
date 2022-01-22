using MediatR;
using Microsoft.AspNetCore.Mvc;
using Zolupos.Modules.Transaction.Core.Queries;

namespace Zolupos.Controllers
{
    [Route("/test")]
    [ApiController]
    public class Test
    {
        private readonly IMediator _mediator;
        public Test(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<object> boo()
        {
            var a = await _mediator.Send(new GetAllTransactionQuery());
            return new { res = a };
        }
    }
}
