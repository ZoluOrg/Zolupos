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
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Products
{
    public record FetchAllProductsQuery : IRequest<ResultWrapper<ICollection<Product>>>;

    public class FetchAllProductsHandler : IRequestHandler<FetchAllProductsQuery, ResultWrapper<ICollection<Product>>>
    {
        private IApplicationDbContext _context;
        public FetchAllProductsHandler(IApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<ResultWrapper<ICollection<Product>>> Handle(FetchAllProductsQuery request, CancellationToken cancellationToken)
        {
            var products = await _context.Products.ToListAsync();
            return new ResultWrapper<ICollection<Product>> { Receive = products, Message = "" };
        }
    }
}