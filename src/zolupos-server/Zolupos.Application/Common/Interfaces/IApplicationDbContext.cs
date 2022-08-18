using Microsoft.EntityFrameworkCore;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Customer> Customers { get; set; }
        DbSet<Employee> Employees { get; set; }
        DbSet<OrderedProduct> OrderedProducts { get; set; }
        DbSet<Product> Products { get; set; }
        DbSet<Transaction> Transactions { get; set; }
        DbSet<Device> Devices { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}