using Microsoft.EntityFrameworkCore;
using Zolupos.Transactions.Core.Entities;

namespace Zolupos.Transactions.Core.Interfaces
{
    public interface ITransactionsContext
    {
        DbSet<OrderedItems> Ordereditems { get; set; }
        DbSet<OrderTransactions> Transactions { get; set; }

        Task<int> Save();
    }
}