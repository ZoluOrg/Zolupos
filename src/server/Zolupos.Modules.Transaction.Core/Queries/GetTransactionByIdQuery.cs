using MediatR;
using Zolupos.Modules.Transaction.Core.DTO;
using Zolupos.Modules.Transaction.Core.Entity;

namespace Zolupos.Modules.Transaction.Core.Queries
{
    public record GetTransactionByIdQuery (int Id) : IRequest<TransactionDto>;
}