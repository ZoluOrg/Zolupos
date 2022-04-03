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
    public class ReturnOrderedItemHandler : IRequestHandler<ReturnOrderedItemCommand, ResultWrapper<string>>
    {
        private readonly ITransactionsContext _context;
        public ReturnOrderedItemHandler(ITransactionsContext context)
        {
            _context = context;
        }

        public async Task<ResultWrapper<string>> Handle(ReturnOrderedItemCommand request, CancellationToken cancellationToken)
        {
            var item = await _context.OrderedItems.Where(itm => itm.OrderTransactionsId == request.OrderTransactionId && itm.OrderedItemsId == request.OrderedItemId).FirstAsync();
            item.isProductReturned = true;
            await _context.Save();
            return new ResultWrapper<string> { Value = "", Message = "Returned" };
        }
    }
}
