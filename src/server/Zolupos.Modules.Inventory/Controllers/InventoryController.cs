﻿using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.Command;
using Zolupos.Modules.Inventory.Core.DTO;
using Zolupos.Modules.Inventory.Core.Queries;
using Zolupos.Shared.Core.Utilities;

namespace Zolupos.Modules.Inventory.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : Controller
    {
        public readonly IMediator _mediator;
        public InventoryController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet]
        [Authorize(Roles = "Admin,Employee")]
        public async Task<ActionResult<IList<ProductDTO>>> GetAllProduct()
        {
            var Products = await _mediator.Send(new GetAllProductQuery());
            return Ok(Products);
        }
        [HttpGet("{id:int}")]
        [Authorize(Roles = "Admin,Employee")]
        public async Task<ActionResult<ProductDTO>> GetProductById(int id)
        {
            var Product = await _mediator.Send(new GetProductByIdQuery(id));
            return Ok(Product);
        }
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<List<int>>> AddProducts()
        {
            var body = await BodyUtilities.GetBody(HttpContext);
            var ids = await _mediator.Send(new AddProductCommand(body));
            return Ok(ids);
        }
        [HttpPatch("edit/{id:int}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<int>> EditProducts(int id)
        {
            var body = await BodyUtilities.GetBody(HttpContext);
            var result = await _mediator.Send(new EditProductCommand(body, id));
            return Ok(result);
        }
        [HttpPatch("restock")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> Restock(int id, int amount)
        {
            var result = await _mediator.Send(new RestockCommand(id, amount));
            return Ok(result);
        }
    }
}
