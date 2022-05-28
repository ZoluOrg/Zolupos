using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Application.Common.DTO
{
    public class TransactionDTO
    {
        public int TransactionId { get; set; }
        public int CustomerId { get; set; }
        public DateTime TransactedAt { get; set; }
        public virtual List<OrderedProductDTO> OrderedProducts { get; set; }
    }
}
