using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Enums;

namespace Zolupos.Application.Entities
{
    public class Transaction
    {
        public int TransactionId { get; set; }
        public Guid Reference { get; set; }

        public int? CustomerId { get; set; }
        public Customer? TransactionCustomer { get; set; }

        public DateTime TransactedAt { get; set; }
        public float Vat { get; set; }
        public int Discount { get; set; }
        public float Total { get; set; }
        public float SubTotal { get; set; }

        public virtual List<OrderedProduct> OrderedProducts { get; set; }
        public virtual List<Payment> Payments { get; set; }

        public int DeviceId { get; set; }
        public virtual Device Device { get; set; }
    }
}
