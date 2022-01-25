using System.Text.Json;
using MediatR;
using Zolupos.Modules.Transaction.Core.Command;
using Zolupos.Modules.Transaction.Core.Entity;
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
            var Transaction = JsonSerializer.Deserialize<UserTransaction>(request.transaction);
            Transaction.Date = DateTime.UtcNow;
            _context.UserTransactions.Add(Transaction);
            await _context.SaveChanges();

            return Transaction.TransactionId;
        }
    }
}
