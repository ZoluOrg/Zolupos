using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transactions.Core.DTO;
using Zolupos.Modules.Transactions.Core.Interfaces;
using Zolupos.Modules.Transactions.Core.Queries;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Transactions.Core.Handlers
{
    public class GetTransactionByIdHandler : IRequestHandler<GetTransactionByIdQuery, ResultWrapper<GetTransactionResponse>>
    {
        private ITransactionsContext _context;
        private IMapper _mapper;

        public GetTransactionByIdHandler(ITransactionsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ResultWrapper<GetTransactionResponse>> Handle(GetTransactionByIdQuery request, CancellationToken cancellationToken)
        {
            var transaction = await _context.Transactions.Include(tr => tr.OrderedItems).Where(tr => tr.OrderTransactionsId == request.id).FirstOrDefaultAsync();
            if (transaction == null) throw new Exception($"Transaction with the id of {request.id} does not exist.");
            var mapped = _mapper.Map<GetTransactionResponse>(transaction);
            return new ResultWrapper<GetTransactionResponse> { Value = mapped, Message = "" };
        }
    }
}
