using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.DTO;
using Zolupos.Application.Common.Interfaces;
using Microsoft.EntityFrameworkCore;
using Zolupos.Application.Common.Wrapper;

namespace Zolupos.Application.Features.Transactions
{
    public record FetchTransactionsPaginatedQuery(int page, int length) : IRequest<FetchTransactionPaginatedResponse>;
    public class FetchTransactionPaginatedResponse
    {
        public Pagination<ICollection<TransactionDTO>> PaginationInfo { get; set; }
        public ICollection<TransactionDTO> Data { get; set; }
    }
    public class FetchTransactionPaginatedHandler : IRequestHandler<FetchTransactionsPaginatedQuery, FetchTransactionPaginatedResponse>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;

        public FetchTransactionPaginatedHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<FetchTransactionPaginatedResponse> Handle(FetchTransactionsPaginatedQuery request, CancellationToken cancellationToken)
        {
            var pagingValidator = new PaginationFilter(request.length, request.page);
            var results = await _context.Transactions.Include(tr => tr.Payments).Include(tr => tr.OrderedProducts)
                .Skip((request.page - 1) * request.length).Take(request.length).ToListAsync();
            var mappedResult = _mapper.Map<ICollection<TransactionDTO>>(results);
            var totalItems = await _context.Transactions.CountAsync();
            var response = new Pagination<ICollection<TransactionDTO>>(mappedResult, request.length, request.page, totalItems);
            var actReponse = new FetchTransactionPaginatedResponse
            {
                PaginationInfo = response,
                Data = mappedResult,
            };
            return actReponse;
        }
    }
}
