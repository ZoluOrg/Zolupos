using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transaction.Core.Entity;

namespace Zolupos.Modules.Transaction.Core.DTO
{
    public class GetAllTransactionRes
    {
        public int TransactionId { get; set; }
        public DateTime Date { get; set; }
        public virtual ICollection<AllOrderedProductDTO> OrderedProducts { get; set; }
    };

    public class AllOrderedProductDTO
    {
        public int Id { get; set; }
        public string Product { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public bool Returned { get; set; }

        public int TransactionId { get; set; }
    }
};
