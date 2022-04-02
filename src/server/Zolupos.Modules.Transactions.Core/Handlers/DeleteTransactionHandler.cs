using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transactions.Core.Commands;
using Zolupos.Modules.Transactions.Core.Interfaces;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Transactions.Core.Handlers
{
    public class DeleteTransactionHandler : IRequestHandler<DeleteTransactionCommand, ResultWrapper<int>>
    {
        private ITransactionsContext _context;
        public DeleteTransactionHandler(ITransactionsContext context)
        {
            _context = context;
        }

        public async Task<ResultWrapper<int>> Handle(DeleteTransactionCommand request, CancellationToken cancellationToken)
        {
            var product = await _context.Transactions.Where(tr => tr.OrderTransactionsId == request.id).FirstOrDefaultAsync();
            if (product is null) throw new Exception($"Transaction with the id of {request.id} does not exist!");
            _context.Transactions.Remove(product);
            await _context.Save();
            return new ResultWrapper<int> { Value = product.OrderTransactionsId, Message="Product Deleted"};
        }
    }
}
