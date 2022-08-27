using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PaperRings.Entities
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Barcode { get; set; }
        public double Price { get; set; }
        public double UnitCost { get; set; }
        public bool Vat { get; set; }

        public virtual ICollection<OrderedProduct> OrderedProducts { get; set; }
    }
}
