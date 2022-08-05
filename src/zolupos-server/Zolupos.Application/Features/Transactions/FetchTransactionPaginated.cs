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

namespace Zolupos.Application.Features.Transactions
{
    public record FetchTransactionsPaginatedQuery(int startingId, int length) : IRequest<ICollection<TransactionDTO>>;
    public class FetchTransactionPaginatedHandler : IRequestHandler<FetchTransactionsPaginatedQuery, ICollection<TransactionDTO>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;

        public FetchTransactionPaginatedHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<ICollection<TransactionDTO>> Handle(FetchTransactionsPaginatedQuery request, CancellationToken cancellationToken)
        {
            var result = await _context.Transactions.Include(tr => tr.Payments).Include(tr => tr.OrderedProducts)
                .Where(tr => tr.TransactionId > request.startingId).Take(request.length).ToListAsync();
            var mappedResult = _mapper.Map<ICollection<TransactionDTO>>(result);
            return mappedResult;
        }
    }
}
