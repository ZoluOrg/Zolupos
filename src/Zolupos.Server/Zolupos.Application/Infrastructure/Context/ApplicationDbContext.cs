using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Enums;
using Zolupos.Application.Common.Interface;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Infrastructure.Context
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Transaction> Transactions { get; set; }
        public virtual DbSet<OrderedProduct> OrderedProducts { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().HasData(new Customer { CustomerId = 1, CustomerName = "Sample Customer", CustomerPoint = 0 });
            modelBuilder.Entity<Product>().HasData(new Product { ProductId = 1, ProductBarcode = "00001", ProductName = "Sample Product", ProductPrice = 10, ProductQuantity = 10 });

            modelBuilder.Entity<Transaction>().HasMany(tr => tr.OrderedProducts).WithOne(ord => ord.Transaction);
            modelBuilder.Entity<OrderedProduct>().HasOne(ord => ord.Transaction).WithMany(tr => tr.OrderedProducts);

            modelBuilder.Entity<Employee>().HasData(new Employee { EmployeeId = 1, FirstName = "Sample", SurName = "Employee", FullName = "Sample Employee", Pin = 1989, Role = "Admin", PhoneNumber = 81234567, LastLogin = DateTime.UtcNow });
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            return base.SaveChangesAsync(cancellationToken);
        }

    }
}
