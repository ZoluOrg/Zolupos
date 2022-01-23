using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Transaction.Core.Entity;
using Zolupos.Modules.Transaction.Core.Interface;
using Zolupos.Modules.Transaction.Core.Queries;

namespace Zolupos.Modules.Transaction.Core.Handler
{
    public class GetAllTransactionHandler : IRequestHandler<GetAllTransactionQuery, IEnumerable<object>>
    {
        public readonly ITransactionDbContext _context;

        public GetAllTransactionHandler(ITransactionDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<object>> Handle(GetAllTransactionQuery request, CancellationToken cancellationToken)
        {
            var Transactions = await _context.UserTransactions
                .Select(
                    ut => new
                    {
                        ut.TransactionId,
                        ut.Date,
                        OrderedProducts = ut.OrderedProducts.Select(op => new
                        {
                            op.TransactionId,
                            op.Id,
                            op.Product,
                            op.ProductId,
                            op.Quantity,
                            op.Returned,
                        }).ToList()
                    }).ToListAsync();
            if (Transactions == null)
            {
                return null;
            }
            return Transactions;
        }
    }
}
