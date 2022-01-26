using MediatR;
using Microsoft.AspNetCore.Mvc;
using Zolupos.Modules.Transaction.Core.Queries;
using Zolupos.Modules.Transaction.Core.Command;
using Zolupos.Shared.Core.Utilities;

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
            return Ok(Transactions);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult> GetTransactionById(int Id)
        {
            var Transaction = await _mediator.Send(new GetTransactionByIdQuery(Id));
            return Ok(Transaction);
        }

        [HttpPost]
        public async Task<IActionResult> PostTransaction()
        {
            var body = await BodyUtilities.GetBody(HttpContext);
            var id = await _mediator.Send(new AddTransactionCommand(body));
            return Ok(id);
        }
    }
}
