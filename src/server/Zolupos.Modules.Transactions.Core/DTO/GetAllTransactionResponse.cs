using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.Entity;

namespace Zolupos.Modules.Transactions.Core.DTO
{
    public record GetAllTransactionResponse(int TransactionId, DateTime TransactedAt, int Total, List<Product> Products);
}
