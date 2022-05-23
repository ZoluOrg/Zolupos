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
        public virtual Product Product { get; set; }

        public Transaction Transaction { get; set; }
    }
}
