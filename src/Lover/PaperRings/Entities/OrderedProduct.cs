using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PaperRings.Entities
{
    public class OrderedProduct
    {
        public int OrderedProductId { get; set; }
        public int Quantity { get; set; }
        public bool BunchPrice { get; set; }

        //Foreign Key
        public int ProductId { get; set; }
        public Product Product { get; set; }

        //Foreign Key
        public int TransactionId { get; set; }
        public Transaction Transaction { get; set; }
    }
}
