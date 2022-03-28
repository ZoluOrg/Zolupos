﻿using System.Collections;
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
using Microsoft.AspNetCore.Authorization;

namespace Zolupos.Modules.Transaction.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : Controller
    {
        private readonly IMediator _mediator;
        private readonly Settings _setting;
        public TransactionController(IMediator mediator, IOptions<Settings> setting)
        {
            _mediator = mediator;
            _setting = setting.Value;
        }

        [HttpGet]
        [Authorize(Roles = "Admin, Employee")]
        public async Task<ActionResult> GetAllTransaction()
        {
            var Transactions = await _mediator.Send(new GetAllTransactionQuery());
            return Ok(Transactions);
        }

        [HttpGet("{Id:int}")]
        [Authorize(Roles = "Admin, Employee")]
        public async Task<ActionResult> GetTransactionById(int Id)
        {
            var Transaction = await _mediator.Send(new GetTransactionByIdQuery(Id));
            return Ok(Transaction);
        }

        [HttpPost]
        [Authorize(Roles = "Admin, Employee")]
        public async Task<ActionResult> PostTransaction ()
        {
            return Ok();
        }

        [HttpPost("edit/{id:int}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> Update(int id, EditTransactionRequest editedTransaction)
        {
            if (id == null || editedTransaction == null) return BadRequest(new { message = "Missing Parameter" });
            var result = await _mediator.Send(new EditTransactionCommand(editedTransaction, id));
            return Ok(result);
        }
    }
}
