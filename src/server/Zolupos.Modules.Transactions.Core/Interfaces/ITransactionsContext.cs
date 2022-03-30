using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Transactions.Core.Entities;

namespace Zolupos.Modules.Transactions.Core.Interfaces
{
    public interface ITransactionsContext
    {
        DbSet<OrderedItems> Ordereditems { get; set; }
        DbSet<OrderTransactions> Transactions { get; set; }

        Task<int> Save();
    }
}