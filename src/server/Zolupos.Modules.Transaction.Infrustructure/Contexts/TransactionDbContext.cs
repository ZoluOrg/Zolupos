using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transaction.Core.Entity;
using Zolupos.Modules.Transaction.Core.Interface;
using Zolupos.Shared.Core.Interfaces;

namespace Zolupos.Modules.Transaction.Infrustructure.Contexts
{
    public class TransactionDbContext : DbContext, ITransactionDbContext
    {
        public TransactionDbContext(DbContextOptions options) : base(options) { }
        public DbSet<UserTransaction> UserTransactions { get; set; }
        public DbSet<OrderedProduct> OrderedProducts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // To Table
            modelBuilder.Entity<UserTransaction>().ToTable("UserTransactions");
            modelBuilder.Entity<OrderedProduct>().ToTable("OrderedProducts");

            // RelationShips
            modelBuilder.Entity<UserTransaction>().HasKey(ut => ut.TransactionId);
            modelBuilder.Entity<UserTransaction>().HasMany(ut => ut.OrderedProducts).WithOne(op => op.UserTransaction);

            modelBuilder.Entity<OrderedProduct>().HasKey(op => op.Id);
            modelBuilder.Entity<OrderedProduct>().HasOne(op => op.UserTransaction).WithMany(ut => ut.OrderedProducts).HasForeignKey(op => op.TransactionId);
        }

        public void SaveToDB () {
            this.SaveChanges();
        }
    }
}
