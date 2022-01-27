namespace Zolupos.Modules.Inventory.Core.Entity
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int Quantity { get; set; }
        public DateTime LastEdit { get; set; }
        public DateTime LastRestock { get; set; }
    }
}