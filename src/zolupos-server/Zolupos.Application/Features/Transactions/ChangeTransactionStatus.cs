using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interfaces;
using Microsoft.EntityFrameworkCore;
using Zolupos.Shared.Model;
using Zolupos.Application.Common.Enums;

namespace Zolupos.Application.Features.Transactions
{
    public record ChangeTransactionStatusCommand (int transactionId, string status) : IRequest<int>;
    public class ChangeTransactionStatusHandler : IRequestHandler<ChangeTransactionStatusCommand, int>
    {
        private IApplicationDbContext _context;
        public ChangeTransactionStatusHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(ChangeTransactionStatusCommand request, CancellationToken cancellationToken)
        {
            var transaction = await _context.Transactions.Where(tr => tr.TransactionId == request.transactionId).FirstOrDefaultAsync();
            if (transaction == null) throw new CustomError("Transaction doesn't exist!", Errors: "", StatusCode: System.Net.HttpStatusCode.NotFound);
            
            switch (request.status)
            {
                case "return":
                    transaction.Status = TransactionStatus.RETURN;
                    break;
                case "void":
                    transaction.Status = TransactionStatus.VOID;
                    break;
                case "order":
                    transaction.Status = TransactionStatus.ORDER;
                    break;
                case "comp":
                    transaction.Status = TransactionStatus.COMPLETE;
                    break;
            }

            await _context.SaveChangesAsync();

            return transaction.TransactionId;
        }
    }
}
