using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transactions.Core.Commands;
using Zolupos.Modules.Transactions.Core.Entities;
using Zolupos.Modules.Transactions.Core.Interfaces;

namespace Zolupos.Modules.Transactions.Core.Handlers
{
    public class AddTransactionHandler : IRequestHandler<AddTransactionCommand, int>
    {
        private ITransactionsContext _context;
        private IMapper _mapper;

        public AddTransactionHandler(ITransactionsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<int> Handle(AddTransactionCommand request, CancellationToken cancellationToken)
        {
            var mapped = _mapper.Map<OrderTransactions>(request);
            await _context.Transactions.AddAsync(mapped);
            await _context.Save();
            return mapped.OrderTransactionsId;
        }
    }
}
