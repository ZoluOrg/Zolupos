using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Inventory.Core.Entity;

namespace Zolupos.Modules.Inventory.Core.Interface
{
    public interface IInventoryDbContext
    {
        DbSet<Product> Products { get; set; }

        Task<int> SaveChanges();
        Task Update(Product toEdit, Product toSave);
    }
}