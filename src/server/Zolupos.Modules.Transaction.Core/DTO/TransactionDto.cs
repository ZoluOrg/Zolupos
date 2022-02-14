using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transaction.Core.Entity;

namespace Zolupos.Modules.Transaction.Core.DTO
{
    public class TransactionDto
    {
        public int TransactionId { get; set; }
        public DateTime Date { get; set; }
        public virtual ICollection<OrderedProductDto> OrderedProducts { get; set; }
    };
};
