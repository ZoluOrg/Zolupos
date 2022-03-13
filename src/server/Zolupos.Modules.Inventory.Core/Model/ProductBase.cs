using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Inventory.Core.Model
{
    public class ProductBase
    {
        public string ProductName { get; set; }
        public string BarCode { get; set; }
        public string ProductManufacturer { get; set; }
        public string ProductType { get; set; }
        public int ProductQuantity { get; set; }
    }
}
