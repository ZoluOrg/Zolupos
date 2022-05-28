using Microsoft.AspNetCore.Mvc;
using Zolupos.Application.Features.Transactions;

namespace Zolupos.Server.Controllers.Transactions
{
    public class TransactionController : ApiControllerBase
    {
        [HttpGet]
        public async Task<ActionResult> GetAllTransactions()
        {
            var transactions = await Mediator.Send(new GetAllTransactionQuery());
            return Ok(transactions);
        }

        [HttpPost]
        public async Task<ActionResult> AddTransaction(AddTransactionCommand command)
        {
            var transaction = await Mediator.Send(command);
            return Ok(transaction);
        }
    }
}
