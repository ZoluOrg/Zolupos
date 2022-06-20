using MediatR;
using Microsoft.EntityFrameworkCore;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Products
{
    public record SearchProductQuery (string Query) : IRequest<ResultWrapper<ICollection<Product>>>;
    public class SearchProductHandler : IRequestHandler<SearchProductQuery, ResultWrapper<ICollection<Product>>>
    {
        private IApplicationDbContext _context;
        public SearchProductHandler(IApplicationDbContext context)
        {
            _context = context; 
        }
        public async Task<ResultWrapper<ICollection<Product>>> Handle(SearchProductQuery request, CancellationToken cancellationToken)
        {
            var result = await _context.Products.Where(product => product.ProductBarcode.Contains(request.Query) || product.ProductName.Contains(request.Query)).ToListAsync();
            return new ResultWrapper<ICollection<Product>> { Receive = result, Message = "" };
        }
    }
}
