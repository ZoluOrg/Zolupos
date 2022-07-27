using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Enums;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Infrastructure.Context
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Transaction> Transactions { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<OrderedProduct> OrderedProducts { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Customer>().HasData(new Customer { CustomerId = 1, CustomerFirstName = "Sample", CustomerLastName = "Customer", CustomerEmail = "Sample@customer.com", CustomerPhoneNumber = "0925", CustomerSpent = 0, CustomerProfile = null});
            modelBuilder.Entity<Product>().HasData(new Product { ProductId = 1, ProductBarcode = "00001", ProductName = "Sample Product", ProductUnitPrice = 10, ProductUnitCost = 5, ProductQuantity = 10, ProductManufacturer = "Zolu", ProductType = "Sample", WithVat = true });
            modelBuilder.Entity<Product>().HasData(new Product { ProductId = 2, ProductBarcode = "00001", ProductName = "Sample Product With Out Vat", ProductUnitPrice = 10, ProductUnitCost = 5, ProductQuantity = 10, ProductManufacturer = "Zolu", ProductType = "Sample", WithVat = false });

            modelBuilder.Entity<Transaction>().HasMany(tr => tr.OrderedProducts).WithOne(ord => ord.Transaction);
            modelBuilder.Entity<OrderedProduct>().HasOne(ord => ord.Transaction).WithMany(tr => tr.OrderedProducts);

            modelBuilder.Entity<Transaction>().HasMany(tr => tr.Payments).WithOne(py => py.Transaction);
            modelBuilder.Entity<Payment>().HasOne(py => py.Transaction).WithMany(tr => tr.Payments);

            modelBuilder.Entity<Employee>().HasData(new Employee { EmployeeId = 1, FirstName = "Sample", SurName = "Employee", FullName = "Sample Employee", Pin = 1989, Role = "Admin", PhoneNumber = 81234567, LastLogin = DateTime.UtcNow, Profile = null });
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            return base.SaveChangesAsync(cancellationToken);
        }

    }
}
