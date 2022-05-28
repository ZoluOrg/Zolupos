using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.DTO;
using Zolupos.Application.Common.Interface;

namespace Zolupos.Application.Features.Transactions
{
    public record GetAllTransactionQuery : IRequest<ICollection<TransactionDTO>>;
    public class GetAllTransactionHandler : IRequestHandler<GetAllTransactionQuery, ICollection<TransactionDTO>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;

        public GetAllTransactionHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ICollection<TransactionDTO>> Handle(GetAllTransactionQuery request, CancellationToken cancellationToken)
        {
            var transactions = await _context.Transactions.ToListAsync();
            var mappedTransactions = _mapper.Map<ICollection<TransactionDTO>>(transactions);

            return mappedTransactions;
        }
    }
}
