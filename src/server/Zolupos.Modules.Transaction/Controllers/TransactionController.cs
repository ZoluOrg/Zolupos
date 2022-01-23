using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Transaction.Core.Queries;
using Zolupos.Modules.Transaction.Core.Command;


namespace Zolupos.Modules.Transaction.Controllers
{
    [Route("api/[controller]")]
    public class TransactionController
    {
        private readonly IMediator _mediator;
        public TransactionController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<object> GetAllTransaction()
        {
            var Transactions = await _mediator.Send(new GetAllTransactionQuery());
            return new { res = Transactions};
        }
    }
}
