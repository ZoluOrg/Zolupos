using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Transactions.Core.Commands
{
    public record DeleteTransactionCommand (int id) : IRequest<ResultWrapper<int>>;
}
