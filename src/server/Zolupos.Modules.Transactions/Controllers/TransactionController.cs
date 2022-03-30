using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
        public async Task<ActionResult> GetAllTransactions(int id)
        {
            var result = await _mediator.Send(new GetAllTransactionQuery());
            return Ok(result);
        }
    }
}
