using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transactions.Core.DTO;

namespace Zolupos.Modules.Transactions.Core.Queries
{
    public record GetTransactionById(int id) : IRequest<GetTransactionResponse>;
}
