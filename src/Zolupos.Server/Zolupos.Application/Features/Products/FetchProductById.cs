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
    public record FetchProductByIdQuery(int id) : IRequest<Product>;
    public class FetchProductByIdHandler : IRequestHandler<FetchProductByIdQuery, Product>
    {
        private IApplicationDbContext _context;
        public FetchProductByIdHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Product> Handle(FetchProductByIdQuery request, CancellationToken cancellationToken)
        {
            var product = await _context.Products.Where(product => product.ProductId == request.id).FirstAsync();
            return product;
        }
    }
}
