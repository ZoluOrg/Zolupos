using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Application.Entities
{
    public class OrderedProduct
    {
        public int OrderedProductId { get; set; }
        public int Quantity { get; set; }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int ProductUnitPrice { get; set; }
        public int ProductUnitCost { get; set; }
        public bool WithVat { get; set; }

        public virtual Product Product { get; set; }

        public float BunchTotal { get; set; }
        public virtual Transaction Transaction { get; set; }
    }
}
