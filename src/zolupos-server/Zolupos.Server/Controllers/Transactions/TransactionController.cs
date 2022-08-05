﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Zolupos.Application.Features.Transactions;

namespace Zolupos.Server.Controllers.Transactions
{
    [Authorize]
    public class TransactionController : ApiControllerBase
    {
        [HttpGet]
        public async Task<ActionResult> GetAllTransactions()
        {
            var transactions = await Mediator.Send(new FetchAllTransactionQuery());
            return Ok(transactions);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult> GetTransactionById(int Id)
        {
            var transaction = await Mediator.Send(new FetchTransactionByIdQuery(Id));
            return Ok(transaction);
        }

        [HttpGet("paginated")]
        public async Task<ActionResult> GetTransactionsPaginated([FromQuery(Name = "size")] int size, [FromQuery(Name = "startingId")] int startingId)
        {
            var transactions = await Mediator.Send(new FetchTransactionsPaginatedQuery(startingId, size));
            return Ok(transactions);
        }

        [HttpPost]
        public async Task<ActionResult> AddTransaction(AddTransactionCommand command)
        {
            var transaction = await Mediator.Send(command);
            return Ok(transaction);
        }

        [HttpDelete("{Id:int}")]
        public async Task<ActionResult> DeleteTransaction(int Id)
        {
            var result = await Mediator.Send(new DeleteTransactionCommand(Id));
            return Ok(result);
        }
    }
}
