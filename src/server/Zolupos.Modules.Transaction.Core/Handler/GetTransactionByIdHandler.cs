using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Transaction.Core.DTO;
using Zolupos.Modules.Transaction.Core.Entity;
using Zolupos.Modules.Transaction.Core.Interface;
using Zolupos.Modules.Transaction.Core.Queries;

namespace Zolupos.Modules.Transaction.Core.Handler
{
    public class GetTransactionByIdHandler : IRequestHandler<GetTransactionByIdQuery, TransactionRes>
    {
        public ITransactionDbContext _context;
        public IMapper _mapper;
        public IMediator _mediator;

        public GetTransactionByIdHandler(ITransactionDbContext context, IMapper mapper, IMediator mediator)
        {
            _context = context;
            _mapper = mapper;
            _mediator = mediator;
        }

        public async Task<TransactionRes> Handle(GetTransactionByIdQuery request, CancellationToken cancellationToken)
        {
            var Transaction = await _context.UserTransactions.Include(ut=>ut.OrderedProducts).FirstOrDefaultAsync(ut => ut.TransactionId == request.Id);
            var mapped = _mapper.Map<UserTransaction, TransactionRes>(Transaction);
            return mapped;
        }
    }
}