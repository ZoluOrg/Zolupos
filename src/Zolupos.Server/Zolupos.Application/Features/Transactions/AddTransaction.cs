using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interface;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Transactions
{
    public class AddTransactionCommand : IRequest<int>
    {
        public int CustomerId { get; set; }
        public virtual List<AddOrderedProduct> OrderedProducts { get; set; }
    }
    public class AddOrderedProduct
    {
        public int Quantity { get; set; }
        public int ProductId { get; set; }
    }
    public class AddTrasactionHandler : IRequestHandler<AddTransactionCommand, int>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;
        public AddTrasactionHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<int> Handle(AddTransactionCommand request, CancellationToken cancellationToken)
        {
            var mappedTransaction = _mapper.Map<Transaction>(request);
            mappedTransaction.TransactedAt = DateTime.UtcNow;
            await _context.Transactions.AddAsync(mappedTransaction);
            await _context.SaveChangesAsync();

            return mappedTransaction.TransactionId;
        }
    }
}
