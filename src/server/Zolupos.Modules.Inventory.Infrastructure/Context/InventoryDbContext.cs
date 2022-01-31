using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Inventory.Core.Entity;
using Zolupos.Modules.Inventory.Core.Interface;

namespace Zolupos.Modules.Inventory.Infrastructure.Context
{
    public class InventoryDbContext : DbContext, IInventoryDbContext
    {
        public InventoryDbContext(DbContextOptions<InventoryDbContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>();
        }

        public async Task<int> SaveChanges()
        {
            return await this.SaveChangesAsync();
        }

        public async Task Update(Product toEdit, Product toSave)
        {
            toSave.ProductId = toEdit.ProductId;
            this.Entry(toEdit).CurrentValues.SetValues(toSave);
        }
    }
}