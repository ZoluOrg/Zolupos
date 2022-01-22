using System;
using MediatR;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Transaction.Core.Entity;
using Zolupos.Modules.Transaction.Core.Command;
using Zolupos.Modules.Transaction.Core.Interface;

namespace Zolupos.Modules.Transaction.Core.Handler
{
    public class AddTransactionHandler : IRequestHandler<AddTransactionCommand, int>
    {
        private readonly ITransactionDbContext _context;
        public AddTransactionHandler(ITransactionDbContext context)
        {
            _context = context;
        }
        public async Task<int> Handle(AddTransactionCommand request, CancellationToken cancellationToken)
        {
            var Transaction = request.transaction;
            _context.UserTransactions.Add(Transaction);
            _context.SaveChanges();

            return Transaction.TransactionId;
        }
    }
}
