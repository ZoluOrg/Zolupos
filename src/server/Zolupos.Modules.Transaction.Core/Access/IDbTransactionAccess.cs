using Zolupos.Modules.Transaction.Core.Entity;

namespace Zolupos.Modules.Transaction.Core.Access
{
    public interface IDbTransactionAccess
    {
        Task<List<UserTransaction>> GetAllUserTransactions();
        Task<UserTransaction> GetUserTransaction(int TransactionId);
        Task<int> PutTransaction(string userTransaction);
    }
}