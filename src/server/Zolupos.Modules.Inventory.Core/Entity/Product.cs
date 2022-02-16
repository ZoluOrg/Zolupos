using Zolupos.Modules.Inventory.Core.Model;

namespace Zolupos.Modules.Inventory.Core.Entity
{
    public class Product : ProductBase
    {
        public int ProductId { get; set; }
        public DateTime LastEdit { get; set; }
        public DateTime LastRestock { get; set; }

        public void Copy(Product toCopy)
        {
            ProductId = toCopy.ProductId;
            LastEdit = toCopy.LastEdit;
            LastRestock = toCopy.LastRestock;
            ProductName = toCopy.ProductName;
            Quantity = toCopy.Quantity;
            BrandName = toCopy.BrandName;
        }
    }
}