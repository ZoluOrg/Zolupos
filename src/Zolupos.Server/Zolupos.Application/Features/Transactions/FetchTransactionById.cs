using AutoMapper;
using MediatR;
using System;
using Microsoft.EntityFrameworkCore;
using Zolupos.Application.Common.DTO;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;

namespace Zolupos.Application.Features.Transactions
{
  public record FetchTransactionByIdQuery(int Id) : IRequest<ResultWrapper<TransactionDTO>>;
  public record FetchTransactionByIdHandler : IRequestHandler<FetchTransactionByIdQuery, ResultWrapper<TransactionDTO>>
  {
    private IApplicationDbContext _context;
    private IMapper _mapper;
    public FetchTransactionByIdHandler(IApplicationDbContext context, IMapper mapper)
    {
      _context = context;
      _mapper = mapper;
    }

    public async Task<ResultWrapper<TransactionDTO>> Handle(FetchTransactionByIdQuery request, CancellationToken cancellationToken)
    {
      var transaction = await _context.Transactions.Where(transaction => transaction.TransactionId == request.Id).Include(tr => tr.OrderedProducts).FirstAsync();
      var mappedTransaction = _mapper.Map<TransactionDTO>(transaction);

      return new ResultWrapper<TransactionDTO> { Receive = mappedTransaction, Message = "" };
    }
  }
}
