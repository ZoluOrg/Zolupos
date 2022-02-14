using System.Text.Json;
using AutoMapper;
using MediatR;
using Zolupos.Modules.Transaction.Core.Command;
using Zolupos.Modules.Transaction.Core.Entity;
using Zolupos.Modules.Transaction.Core.Interface;

namespace Zolupos.Modules.Transaction.Core.Handler
{
    public class AddTransactionHandler : IRequestHandler<AddTransactionCommand, int>
    {
        private readonly ITransactionDbContext _context;
        private readonly IMapper _mapper;
        public AddTransactionHandler(ITransactionDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<int> Handle(AddTransactionCommand request, CancellationToken cancellationToken)
        {
            var mapped = _mapper.Map<UserTransaction>(request.Products);
            mapped.Date = DateTime.UtcNow;
            await _context.UserTransactions.AddAsync(mapped);
            await _context.SaveChanges();
            return mapped.TransactionId;
        }
    }
}
