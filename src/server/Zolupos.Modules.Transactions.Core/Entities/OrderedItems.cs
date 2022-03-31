using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.Entity;

namespace Zolupos.Modules.Transactions.Core.Entities
{
    public class OrderedItems
    {
        public int OrderedItemsId { get; set; }
        public int ProductId { get; set; }
        public int OrderTransactionsId { get; set; }
        public OrderTransactions OrderTransactions { get; set; }
    }
}
