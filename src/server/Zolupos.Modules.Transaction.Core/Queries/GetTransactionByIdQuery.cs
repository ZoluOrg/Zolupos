using MediatR;
using Zolupos.Modules.Transaction.Core.DTO;
using Zolupos.Modules.Transaction.Core.Entity;

namespace Zolupos.Modules.Transaction.Core.Queries
{
    /// <summary>
    /// Get transaction with the given id
    /// </summary>
    /// <param name="Id">Id of the transaction</param>
    public record GetTransactionByIdQuery (int Id) : IRequest<TransactionDto>;
}