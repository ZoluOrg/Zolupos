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
    public class AddTransactionCommand : IRequest<Transaction>
    {
        public int CustomerId { get; set; }
        public Customer TransactionCustomer { get; set; }

        public DateTime TransactedAt { get; set; }
        public virtual List<OrderedProduct> OrderedProducts { get; set; }
    }
    public class AddTrasactionHandler : IRequestHandler<AddTransactionCommand, Transaction>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;
        public AddTrasactionHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Transaction> Handle(AddTransactionCommand request, CancellationToken cancellationToken)
        {
            var mappedTransaction = _mapper.Map<Transaction>(request);
            await _context.Transactions.AddAsync(mappedTransaction);
            await _context.SaveChangesAsync();

            return mappedTransaction;
        }
    }
}
