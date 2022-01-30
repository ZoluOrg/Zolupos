using System.Text.Json;
using MediatR;
using Zolupos.Modules.Transaction.Core.Command;
using Zolupos.Modules.Transaction.Core.Entity;
using Zolupos.Modules.Transaction.Core.Interface;
using Zolupos.Modules.Transaction.Core.Model;

namespace Zolupos.Modules.Transaction.Core.Handler
{
    public class AddTransactionHandler : IRequestHandler<AddTransactionCommand, List<int>>
    {
        private readonly ITransactionDbContext _context;
        public AddTransactionHandler(ITransactionDbContext context)
        {
            _context = context;
        }
        public async Task<List<int>> Handle(AddTransactionCommand request, CancellationToken cancellationToken)
        {
            var ids = new List<int>();
            var reqDeserialized = JsonSerializer.Deserialize<AddTransactionRequestModel>(request.transaction);
            for(int i = 0; i != reqDeserialized.Transactions.Count; i++)
            {
                var toSave = reqDeserialized.Transactions[i];
                toSave.Date = DateTime.UtcNow;
                await _context.UserTransactions.AddAsync(toSave);
                await _context.SaveChanges();

                ids.Add(toSave.TransactionId);
            }

            return ids;
        }
    }
}
