using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transactions.Core.Commands;
using Zolupos.Modules.Transactions.Core.Queries;
using Zolupos.Modules.Transactions.Core.Querry;

namespace Zolupos.Modules.Transactions.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : Controller
    {
        private IMediator _mediator { get; set; }
        public TransactionController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult> GetAllTransactions()
        {
            var result = await _mediator.Send(new GetAllTransactionQuery());
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetTransactionById(int id)
        {
            var result = await _mediator.Send(new GetTransactionByIdQuery(id));
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> AddTransaction(AddTransactionCommand command)
        {
            var result = await _mediator.Send(command);
            return Ok(result);
        }

        [HttpPut]
        public async Task<ActionResult> ReturnOrderedItem([FromQuery] int orderTransactionId, [FromQuery] int orderedItemId)
        {
            var result = await _mediator.Send(new ReturnOrderedItemCommand(orderTransactionId, orderedItemId));
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTransaction(int id)
        {
            var result = await _mediator.Send(new DeleteTransactionCommand(id));
            return Ok(result);
        }
    }
}
