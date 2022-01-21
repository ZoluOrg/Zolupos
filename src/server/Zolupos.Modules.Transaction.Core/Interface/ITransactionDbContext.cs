using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Transaction.Core.Entity;
using Zolupos.Shared.Core.Interfaces;

namespace Zolupos.Modules.Transaction.Core.Interface
{
    public interface ITransactionDbContext : IDbContext
    {
        DbSet<OrderedProduct> OrderedProducts { get; set; }
        DbSet<UserTransaction> UserTransactions { get; set; }
    }
}