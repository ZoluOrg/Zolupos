using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Zolupos.Application.Common.DTO;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;

namespace Zolupos.Application.Features.Transactions
{
    public record SearchTransactionQuery(int page, int length, string query) : IRequest<Pagination<ICollection<TransactionDTO>>>;
    public class SearchTransactionQueryHandler : IRequestHandler<SearchTransactionQuery, Pagination<ICollection<TransactionDTO>>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;

        public SearchTransactionQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Pagination<ICollection<TransactionDTO>>> Handle(SearchTransactionQuery request, CancellationToken cancellationToken)
        {
            var transactions = await _context.Transactions.Where(tr => tr.TransactionId.ToString().ToLower().Contains(request.query) 
                || tr.Reference.ToString().ToLower().Contains(request.query)).Include(tr => tr.Payments).Include(tr => tr.OrderedProducts)
                .Where(tr => tr.TransactionId > (request.page - 1) * request.length).Take(request.length).ToListAsync();
            var totalItems = await _context.Transactions.Where(tr => tr.TransactionId.ToString().ToLower().Contains(request.query)
                || tr.Reference.ToString().ToLower().Contains(request.query)).CountAsync();
            var mappedResult = _mapper.Map<ICollection<TransactionDTO>>(transactions);
            return new Pagination<ICollection<TransactionDTO>>(mappedResult, request.length, request.page, totalItems);
        }
    }
}
