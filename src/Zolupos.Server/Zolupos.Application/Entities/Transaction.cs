using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Application.Entities
{
    public class Transaction
    {
        public int TransactionId { get; set; }

        public int CustomerId { get; set; }
        public Customer TransactionCustomer { get; set; }

        public DateTime TransactedAt { get; set; }
        public virtual List<OrderedProduct> OrderedProducts { get; set; }
    }
}
