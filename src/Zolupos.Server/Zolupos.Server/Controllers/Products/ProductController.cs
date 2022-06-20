using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Zolupos.Application.Features.Products;

namespace Zolupos.Server.Controllers.Products
{
    [Authorize]
    public class ProductController : ApiControllerBase
    {
        [HttpGet]
        public async Task<ActionResult> FetchAllProducts()
        {
            var result = await Mediator.Send(new FetchAllProductsQuery());
            return Ok(result);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult> FetchProductById(int Id)
        {
            var result = await Mediator.Send(new FetchProductByIdQuery(Id));
            return Ok(result);
        }

        [HttpGet("Search")]
        public async Task<ActionResult> SearchProduct([FromQuery(Name = "Query")] string Query)
        {
            var result = await Mediator.Send(new SearchProductQuery(Query));
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult> AddProduct(AddProductCommand command)
        {
            var result = await Mediator.Send(command);
            return Ok(result);
        }
        [HttpDelete]
        public async Task<ActionResult> DeleteProduct(DeleteProductCommand command)
        {
            var result = await Mediator.Send(command);
            return Ok(result);
        }
    }
}

