using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Transactions.Core.Entities
{
    public class OrderTransactions
    {
        public int TransactionId { get; set; }
        public DateTime TransactedAt { get; set; }
        public List<OrderedItems> OrderedItems { get; set; }
    }
}
