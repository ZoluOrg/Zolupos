using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Transaction.Core.Entity;
using Zolupos.Modules.Transaction.Core.Interface;

namespace Zolupos.Modules.Transaction.Infrustructure.Contexts
{
    public class TransactionDbContext : DbContext, ITransactionDbContext
    {
        public TransactionDbContext(DbContextOptions<TransactionDbContext> options) : base(options) { }

        public DbSet<UserTransaction> UserTransactions { get; set; }
        public DbSet<OrderedProduct> OrderedProducts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserTransaction>().Property(ut=>ut.Date).HasDefaultValueSql("getdate()");
            
            modelBuilder.Entity<UserTransaction>().HasKey(ut => ut.TransactionId);
            modelBuilder.Entity<OrderedProduct>().HasKey(op => op.Id);
            modelBuilder.Entity<UserTransaction>().HasMany(ut => ut.OrderedProducts).WithOne(op => op.UserTransaction);
            modelBuilder.Entity<OrderedProduct>().HasOne(op => op.UserTransaction).WithMany(ut => ut.OrderedProducts).HasForeignKey(op => op.TransactionId);
        }

        public async Task<int> SaveChanges()
        {
            return await base.SaveChangesAsync();
        }

        public async Task Update(UserTransaction toEdit, UserTransaction toSave)
        {
            toSave.TransactionId = toEdit.TransactionId;
            this.Entry(toEdit).CurrentValues.SetValues(toSave);
        }
    }
}
