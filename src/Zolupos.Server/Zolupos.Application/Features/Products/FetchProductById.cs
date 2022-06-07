using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Abstractions;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Products
{
    public record FetchProductByIdQuery(int id) : IRequest<ResultWrapper<Product>>;
    public class FetchProductByIdHandler : IRequestHandler<FetchProductByIdQuery, ResultWrapper<Product>>
    {
        private IApplicationDbContext _context;
        public FetchProductByIdHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ResultWrapper<Product>> Handle(FetchProductByIdQuery request, CancellationToken cancellationToken)
        {
            var product = await _context.Products.Where(product => product.ProductId == request.id).FirstAsync();
            return new ResultWrapper<Product> { Receive = product, Message = "" };
        }
    }
}
