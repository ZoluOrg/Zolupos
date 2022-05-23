using Microsoft.EntityFrameworkCore;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Common.Interface
{
    public interface IApplicationDbContext
    {
        DbSet<Customer> Customers { get; set; }
        DbSet<OrderedProduct> OrderedProducts { get; set; }
        DbSet<Product> Products { get; set; }
        DbSet<Transaction> Transactions { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}