using AutoMapper;
using MediatR;
using System;
using Microsoft.EntityFrameworkCore;
using Zolupos.Application.Common.DTO;
using Zolupos.Application.Common.Interface;

namespace Zolupos.Application.Features.Transactions
{
    public record GetTransactionByIdQuery (int Id) : IRequest<TransactionDTO>;
    public record GetTransactionByIdHandler : IRequestHandler<GetTransactionByIdQuery, TransactionDTO>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;
        public GetTransactionByIdHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<TransactionDTO> Handle(GetTransactionByIdQuery request, CancellationToken cancellationToken)
        {
            var transaction = await _context.Transactions.Where(transaction => transaction.TransactionId == request.Id).FirstAsync();
            var mappedTransaction = _mapper.Map<TransactionDTO>(transaction);

            return mappedTransaction;
        }
    }
}
