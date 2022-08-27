using Microsoft.EntityFrameworkCore;
using PaperRings.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PaperRings.Context
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Device> Devices { get; set; }
        public DbSet<OrderedProduct> OrderedProducts { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> context) : base(context) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //TR <-> DV
            modelBuilder.Entity<Transaction>().HasOne(tr => tr.Device).WithMany(dv => dv.Transactions);

            //TR <-> ORD
            modelBuilder.Entity<Transaction>().HasMany(tr => tr.OrderedProducts).WithOne(or => or.Transaction);

            //TR <-> CS
            modelBuilder.Entity<Transaction>().HasOne(tr => tr.Customer).WithMany(cs => cs.Transactions);

            //ORD -> PR
            modelBuilder.Entity<OrderedProduct>().HasOne(ord => ord.Product).WithMany(pr => pr.OrderedProducts);

            modelBuilder.Entity<Device>().HasData(new Device
            {
                DeviceId = 1,
                DeviceName = "Sample Device",
                LastRegistration = DateTime.UtcNow,
            });
        }
    }
}
