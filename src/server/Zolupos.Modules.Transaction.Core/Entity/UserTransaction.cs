using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Transaction.Core.Entity
{
    public class UserTransaction
    {
        public int TransactionId { get; set; }
        public DateTime Date { get; set; }

        public virtual ICollection<OrderedProduct> OrderedProducts { get; set; }
    }
}
