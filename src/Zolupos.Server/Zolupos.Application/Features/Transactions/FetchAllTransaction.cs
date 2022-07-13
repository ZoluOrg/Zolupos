using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.DTO;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;

namespace Zolupos.Application.Features.Transactions
{
    public record FetchAllTransactionQuery : IRequest<ResultWrapper<ICollection<TransactionDTO>>>;
    public class FetchAllTransactionHandler : IRequestHandler<FetchAllTransactionQuery, ResultWrapper<ICollection<TransactionDTO>>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;

        public FetchAllTransactionHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ResultWrapper<ICollection<TransactionDTO>>> Handle(FetchAllTransactionQuery request, CancellationToken cancellationToken)
        {
            var transactions = await _context.Transactions.Include(tr => tr.OrderedProducts).Include(tr => tr.Payments).ToListAsync();
            var mappedTransactions = _mapper.Map<ICollection<TransactionDTO>>(transactions);

            return new ResultWrapper<ICollection<TransactionDTO>> { Receive = mappedTransactions, Message = ""};
        }
    }
}
