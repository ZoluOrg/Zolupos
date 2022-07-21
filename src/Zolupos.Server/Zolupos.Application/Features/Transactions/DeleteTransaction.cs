using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;

namespace Zolupos.Application.Features.Transactions
{
    public record DeleteTransactionCommand(int Id) : IRequest<ResultWrapper<int>>;
    public class DeleteTransactionHandler : IRequestHandler<DeleteTransactionCommand, ResultWrapper<int>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;
        public DeleteTransactionHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ResultWrapper<int>> Handle(DeleteTransactionCommand request, CancellationToken cancellationToken)
        {
            var transactionToDelete = await _context.Transactions.Where(transaction => transaction.TransactionId == request.Id).FirstAsync();
            _context.Transactions.Remove(transactionToDelete);
            await _context.SaveChangesAsync();

            return new ResultWrapper<int> { Receive = transactionToDelete.TransactionId, Message = "" };
        }
    }
}
