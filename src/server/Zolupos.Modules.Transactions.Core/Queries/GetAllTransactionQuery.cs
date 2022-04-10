using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Transactions.Core.DTO;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Transactions.Core.Querry
{
    public record GetAllTransactionQuery () : IRequest<ResultWrapper<List<GetTransactionResponse>>>;
}
