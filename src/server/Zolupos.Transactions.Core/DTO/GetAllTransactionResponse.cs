using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Transactions.Core.DTO
{
    public record GetAllTransactionResponse(int TransactionId, DateTime TransactedAt)
    {

    }
}
