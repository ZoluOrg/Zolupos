using MediatR;
using Zolupos.Modules.Transaction.Core.Entity;
using Zolupos.Modules.Transaction.Core.Queries;
using Zolupos.Modules.Transaction.Core.Access;

namespace Zolupos.Modules.Transaction.Core.Handler
{
    public class GetAllTransactionHandler : IRequestHandler<GetAllListQuery, List<UserTransaction>>
    {
        private readonly IDbTransactionAccess _transactionAccess;
        public GetAllTransactionHandler(IDbTransactionAccess transactionAccess)
        {
            _transactionAccess = transactionAccess;
        }
        public async Task<List<UserTransaction>> Handle(GetAllListQuery request, CancellationToken cancellationToken)
        {
            return await _transactionAccess.GetAllUserTransactions();
        }
    }
}
