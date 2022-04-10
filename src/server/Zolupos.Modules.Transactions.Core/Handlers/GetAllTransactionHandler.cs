using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Zolupos.Modules.Transactions.Core.DTO;
using Zolupos.Modules.Transactions.Core.Interfaces;
using Zolupos.Modules.Transactions.Core.Querry;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Transactions.Core.Handlers
{
    public class GetAllTransactionHandler : IRequestHandler<GetAllTransactionQuery, ResultWrapper<List<GetTransactionResponse>>>
    {
        private ITransactionsContext _context;
        private IMapper _mapper;

        public GetAllTransactionHandler(ITransactionsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ResultWrapper<List<GetTransactionResponse>>> Handle(GetAllTransactionQuery request, CancellationToken cancellationToken)
        {
            var transactions = await _context.Transactions.Include(tr => tr.OrderedItems).ToListAsync();
            var mapped = _mapper.Map<List<GetTransactionResponse>>(transactions);
            return new ResultWrapper<List<GetTransactionResponse>> { Value = mapped, Message = "" };
        }
    }
}
