using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Transaction.Core.Interface;
using Zolupos.Modules.Transaction.Core.Entity;

namespace Zolupos.Modules.Transaction.Core.Access
{
    public class DbTransactionAccess : IDbTransactionAccess
    {
        private readonly ITransactionDbContext _context;
        public DbTransactionAccess(ITransactionDbContext context)
        {
            _context = context;
        }
        public async Task<List<UserTransaction>> GetAllUserTransactions()
        {
            var Transactions = await _context.UserTransactions.Include(ut => ut.OrderedProducts).ToListAsync();
            return Transactions;
        }
        public async Task<int> PutTransaction(string userTransaction)
        {
            var Transaction = JsonConvert.DeserializeObject<UserTransaction>(userTransaction);
            var Res = await _context.UserTransactions.AddAsync(Transaction);
            _context.SaveToDB();

            return Transaction.TransactionId;
        }
        public async Task<UserTransaction> GetUserTransaction(int TransactionId)
        {
            var Transactions = await GetAllUserTransactions();
            var Transaction = Transactions.Find(up => up.TransactionId == TransactionId);
            return Transaction;
        }
    }
}
