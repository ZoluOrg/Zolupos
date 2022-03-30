using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Transactions.Core.DTO;
using Zolupos.Transactions.Core.Interfaces;
using Zolupos.Transactions.Core.Querry;

namespace Zolupos.Transactions.Core.Handlers
{
    public class GetAllTransactionHandler : IRequestHandler<GetAllTransactionQuery, List<GetAllTransactionResponse>>
    {
        private ITransactionsContext _context;
        private IMapper _mapper;

        public GetAllTransactionHandler(ITransactionsContext context, IMapper mapper) 
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<GetAllTransactionResponse>> Handle(GetAllTransactionQuery request, CancellationToken cancellationToken)
        {
            var transactions = await _context.Transactions.ToListAsync();
            var mapped = _mapper.Map<List<GetAllTransactionResponse>>(transactions);
            return mapped;
        }
    }
}
