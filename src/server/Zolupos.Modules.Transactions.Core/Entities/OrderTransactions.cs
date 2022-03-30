using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Transactions.Core.Entities
{
    public class OrderTransactions
    {
        public int OrderTransactionsId { get; set; }
        public DateTime TransactedAt { get; set; }
        public int Total { get; set; }
        public List<OrderedItems> OrderedItems { get; set; }
    }
}
