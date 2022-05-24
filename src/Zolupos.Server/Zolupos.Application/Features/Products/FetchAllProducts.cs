using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Abstractions;
using Zolupos.Application.Common.Interface;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Products
{
    public class FetchAllProductsController : ApiControllerBase
    {
        [HttpGet("/products")]
        public async Task<ActionResult> FetchAllProducts()
        {
            var result = await Mediator.Send(new FetchAllProductsCommand());
            return Ok(result);
        }
        public record FetchAllProductsCommand : IRequest<ICollection<Product>>;

        public class FetchAllProductsHandler : IRequestHandler<FetchAllProductsCommand, ICollection<Product>>
        {
            private IApplicationDbContext _context;
            public FetchAllProductsHandler(IApplicationDbContext context)
            {
                _context = context;
            }
            public async Task<ICollection<Product>> Handle(FetchAllProductsCommand request, CancellationToken cancellationToken)
            {
                var products = await _context.Products.ToListAsync();
                return products;
            }
        }
    }
}
