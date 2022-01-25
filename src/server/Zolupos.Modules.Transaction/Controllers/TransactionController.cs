using MediatR;
using Microsoft.AspNetCore.Mvc;
using Zolupos.Modules.Transaction.Core.Queries;


namespace Zolupos.Modules.Transaction.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : Controller
    {
        private readonly IMediator _mediator;
        public TransactionController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult> GetAllTransaction()
        {
            var Transactions = await _mediator.Send(new GetAllTransactionQuery());
            Console.WriteLine(Transactions);
            return Ok(Transactions);
        }
    }
}
