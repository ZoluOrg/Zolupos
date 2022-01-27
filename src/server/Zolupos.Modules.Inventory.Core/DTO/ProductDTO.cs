using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Inventory.Core.DTO
{
    public class ProductDTO
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int Quantity { get; set; }
        public DateTime LastEdit { get; set; }
        public DateTime LastRestock { get; set; }
    }
}
