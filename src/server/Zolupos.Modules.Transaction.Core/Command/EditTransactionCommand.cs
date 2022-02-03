using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Transaction.Core.Command
{
    public record EditTransactionCommand(string editedTransaction, int id) : IRequest<int>;
}
