using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Enums;

namespace Zolupos.Application.Common.DTO
{
    public class TransactionDTO
    {
        public int TransactionId { get; set; }
        public int CustomerId { get; set; }
        public DateTime TransactedAt { get; set; }
        public int Discount { get; set; }
        public int Vat { get; set; }
        public int Total { get; set; }
        public int SubTotal { get; set; }
        public string Notes { get; set; }

        public virtual List<OrderedProductDTO> OrderedProducts { get; set; }
        public virtual List<PaymentDTO> Payments { get; set; }
    }
}
