using System.Collections;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Zolupos.Modules.Transaction.Core.Queries;
using Zolupos.Modules.Transaction.Core.Command;
using Zolupos.Modules.Transaction.Core.DTO;
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
        public async Task<ActionResult<ICollection<TransactionDto>>> GetAllTransaction()
        {
            var Transactions = await _mediator.Send(new GetAllTransactionQuery());
            return Ok(Transactions);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<TransactionDto>> GetTransactionById(int Id)
        {
            var Transaction = await _mediator.Send(new GetTransactionByIdQuery(Id));
            return Ok(Transaction);
        }

        [HttpPost]
        public async Task<ActionResult<List<int>>> PostTransaction()
        {
            var body = await BodyUtilities.GetBody(HttpContext);
            var id = await _mediator.Send(new AddTransactionCommand(body));
            return Ok(id);
        }
        [HttpPost("edit/{utid:int}")]
        public async Task<ActionResult<int>> Update(int utid)
        {
            var body = await BodyUtilities.GetBody(HttpContext);
            var id = await _mediator.Send(new EditTransactionCommand(body, utid));
            return id;
        }
    }
}
