using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Products
{
    public record SearchProductQuery (string Query) : IRequest<ResultWrapper<ICollection<SearchProductResponse>>>;
    public class SearchProductResponse
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductBarcode { get; set; }
        public int ProductUnitCost { get; set; }
        public bool WithVat { get; set; }
        public int ProductUnitPrice { get; set; }

    }
    public class SearchProductHandler : IRequestHandler<SearchProductQuery, ResultWrapper<ICollection<SearchProductResponse>>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;
        public SearchProductHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<ResultWrapper<ICollection<SearchProductResponse>>> Handle(SearchProductQuery request, CancellationToken cancellationToken)
        {
            var result = await _context.Products.Where(product => product.ProductBarcode.ToLower().Contains(request.Query.ToLower()) || product.ProductName.ToLower().Contains(request.Query.ToLower())).ToListAsync();
            var mappedResult = _mapper.Map<ICollection<SearchProductResponse>>(result);
            return new ResultWrapper<ICollection<SearchProductResponse>> { Receive = mappedResult, Message = "" };
        }
    }
}
