using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transaction.Core.Annotation;
using Zolupos.Modules.Transaction.Core.Entity;

namespace Zolupos.Modules.Transaction.Core.Command
{
    /// <summary>
    /// Creates new transaction then save it to the database.
    /// </summary>
    /// <param name="transaction">Transaction to save.</param>
    public record AddTransactionCommand(AddTransactionRequest Products) : IRequest<int>;
}
