using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transactions.Core.Entities;
using Zolupos.Modules.Transactions.Core.Interfaces;

namespace Zolupos.Modules.Transactions.Infrastructure.Context
{
    public class TransactionsContext : DbContext, ITransactionsContext
    {
        public TransactionsContext(DbContextOptions<TransactionsContext> options) : base(options) { }
        public DbSet<OrderTransactions> Transactions { get; set; }
        public DbSet<OrderedItems> OrderedItems { get; set; }

        public async Task<int> Save()
        {
            return await SaveChangesAsync();
        }
    }
}
