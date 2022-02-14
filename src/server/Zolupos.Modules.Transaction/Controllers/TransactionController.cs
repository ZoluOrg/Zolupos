using System.Collections;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Zolupos.Modules.Transaction.Core.Queries;
using Zolupos.Modules.Transaction.Core.Command;
using Zolupos.Modules.Transaction.Core.DTO;
using Zolupos.Shared.Core.Utilities;
using Zolupos.Shared.Core.Model;
using Microsoft.Extensions.Options;
using Zolupos.Modules.Transaction.Core.Entity;
using Zolupos.Modules.Transaction.Core.Annotation;

namespace Zolupos.Modules.Transaction.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : Controller
    {
        private readonly IMediator _mediator;
        private readonly Settings _setting;
        public TransactionController(IMediator mediator, IOptions<Settings> setting, [FromHeader] string token)
        {
            _mediator = mediator;
            _setting = setting.Value;
        }

        [HttpGet]
        public async Task<ActionResult<ICollection<TransactionDto>>> GetAllTransaction()
        {
            Console.WriteLine(_setting.Secret);
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
        public async Task<ActionResult<int>> AddTransaction(AddTransactionRequest transactions)
        {
            if (transactions == null) return BadRequest(new { message = "Invalid Body" });
            var id = await _mediator.Send(new AddTransactionCommand(transactions));
            return Ok(id);
        }

        [HttpPost("edit/{id:int}")]
        public async Task<ActionResult<int>> Update(int id, EditTransactionRequest editedTransaction)
        {
            var body = await BodyUtilities.GetBody(HttpContext);
            var result = await _mediator.Send(new EditTransactionCommand(editedTransaction, id));
            return result;
        }
    }
}
