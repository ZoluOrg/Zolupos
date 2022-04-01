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
    }
}
