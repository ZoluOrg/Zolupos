using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Application.Entities
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductManufacturer { get; set; }
        public string ProductType { get; set; }
        public int ProductQuantity { get; set; }
        public string ProductBarcode { get; set; }
        public int ProductPrice { get; set; }
    }
}
