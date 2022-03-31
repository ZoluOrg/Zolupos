using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.Entity;
using Zolupos.Modules.Transactions.Core.Entities;

namespace Zolupos.Modules.Transactions.Core.DTO
{
    public class GetTransactionResponse
    {
        public int TransactionId { get; set; }
        public DateTime TransactedAt { get; set; }
        public int Total { get; set; }
        public List<GetOrderedItemResponse> OrderedItems { get; set; }
    };
}
