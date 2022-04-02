using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Transactions.Core.Commands
{
    public class AddOrderedItemCommand
    {
        public int ProductOrderedId { get; set; }
        public int ProductOrderedQuantity { get; set; }
        public bool isProductReturned { get; set; }
    }
}
