using MediatR;
using Microsoft.AspNetCore.Mvc;
using Zolupos.Application.Features.Products;

namespace Zolupos.Server.Controllers.Products
{
    public class ProductController : ApiControllerBase
    {
        [HttpGet("/products")]
        public async Task<ActionResult> FetchAllProducts()
        {
            var result = await Mediator.Send(new FetchAllProductsQuery());
            return Ok(result);
        }
        
        [HttpGet("/products/{id:int}")]
        public async Task<ActionResult> FetchProductById(int id)
        {
            var result = await Mediator.Send(new FetchProductByIdQuery(id));
            return Ok(result);
        }

        [HttpPost("/products")]
        public async Task<ActionResult> AddProduct(AddProductCommand command)
        {
            var result = await Mediator.Send(command);
            return Ok(result);
        }
    }
}

