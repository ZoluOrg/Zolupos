using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Application.Common.DTO
{
    public class OrderedProductDTO
    {
        public int OrderedProductId { get; set; }
        public int Quantity { get; set; }
        public float Discount { get; set; }
        public float BunchTotal { get; set; }
        public bool WithVat { get; set; }
        public int ProductId { get; set; }
    }
}
