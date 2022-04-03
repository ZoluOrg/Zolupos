using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Transactions.Core.DTO
{
    public class GetOrderedItemResponse
    {
        public int OrderedItemsId { get; set; }
        public int ProductOrderedId { get; set; }
        public int ProductOrderedQuantity { get; set; }
        public bool isProductReturned { get; set; }
        public int OrderTransactionsId { get; set; }
    }
}
