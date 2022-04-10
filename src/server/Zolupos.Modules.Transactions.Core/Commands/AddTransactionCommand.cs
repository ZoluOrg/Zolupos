using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transactions.Core.Entities;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Transactions.Core.Commands
{
    public class AddTransactionCommand : IRequest<ResultWrapper<int>>
    {
        public int Total { get; set; }
        public List<AddOrderedItemCommand> OrderedItems { get; set; }
    }
}
