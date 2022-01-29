using MediatR;
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
        public async Task<ActionResult<IList<ProductDTO>>> GetAllProduct()
        {
            var Products =await _mediator.Send(new GetAllProductQuery());
            return Ok(Products);
        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult<ProductDTO>> GetProductById(int id)
        {
            var Product = await _mediator.Send(new GetProductByIdQuery(id));
            return Ok(Product);
        }
        [HttpPost]
        public async Task<ActionResult<List<int>>> AddProducts()
        {
            var body = await BodyUtilities.GetBody(HttpContext);
            var ids = await _mediator.Send(new AddProductCommand(body));
            return ids;
        }

    }
}
