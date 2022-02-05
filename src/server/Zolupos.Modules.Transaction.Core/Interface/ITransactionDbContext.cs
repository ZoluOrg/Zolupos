using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Transaction.Core.Entity;

namespace Zolupos.Modules.Transaction.Core.Interface
{
    public interface ITransactionDbContext
    {
        DbSet<OrderedProduct> OrderedProducts { get; set; }
        DbSet<UserTransaction> UserTransactions { get; set; }

        Task<int> SaveChanges();
    }
}