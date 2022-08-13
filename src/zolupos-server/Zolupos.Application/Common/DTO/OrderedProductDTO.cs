using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Application.Common.DTO
{
    public class OrderedProductDTO
    {
        public int Quantity { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int ProductUnitPrice { get; set; }
        public int ProductUnitCost { get; set; }

        public bool WithVat { get; set; }
        public float BunchTotal { get; set; }
    }
}
