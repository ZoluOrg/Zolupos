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
        public int ProductId { get; set; }
        public int TransactionId { get; set; }
    }
}
