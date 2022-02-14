using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Transaction.Core.DTO
{
    public class OrderedProductDto
    {
        public string Product { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public bool Returned { get; set; }

    }
}
