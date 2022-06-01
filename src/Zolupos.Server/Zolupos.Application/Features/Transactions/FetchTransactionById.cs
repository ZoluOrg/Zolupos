using AutoMapper;
using MediatR;
using System;
using Microsoft.EntityFrameworkCore;
using Zolupos.Application.Common.DTO;
using Zolupos.Application.Common.Interface;

namespace Zolupos.Application.Features.Transactions
{
    public record FetchTransactionByIdQuery (int Id) : IRequest<TransactionDTO>;
    public record FetchTransactionByIdHandler : IRequestHandler<FetchTransactionByIdQuery, TransactionDTO>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;
        public FetchTransactionByIdHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<TransactionDTO> Handle(FetchTransactionByIdQuery request, CancellationToken cancellationToken)
        {
            var transaction = await _context.Transactions.Where(transaction => transaction.TransactionId == request.Id).FirstAsync();
            var mappedTransaction = _mapper.Map<TransactionDTO>(transaction);

            return mappedTransaction;
        }
    }
}
