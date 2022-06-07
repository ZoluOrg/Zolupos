using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Transactions
{
    public class AddTransactionCommand : IRequest<ResultWrapper<int>>
    {
        public int CustomerId { get; set; }
        public virtual List<AddOrderedProduct> OrderedProducts { get; set; }
    }
    public class AddOrderedProduct
    {
        public int Quantity { get; set; }
        public int ProductId { get; set; }
    }
    public class AddTrasactionHandler : IRequestHandler<AddTransactionCommand, ResultWrapper<int>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;
        public AddTrasactionHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ResultWrapper<int>> Handle(AddTransactionCommand request, CancellationToken cancellationToken)
        {
            var mappedTransaction = _mapper.Map<Transaction>(request);
            mappedTransaction.TransactedAt = DateTime.UtcNow;
            await _context.Transactions.AddAsync(mappedTransaction);
            await _context.SaveChangesAsync();

            return new ResultWrapper<int> { Receive = mappedTransaction.CustomerId, Message = "" };
        }
    }
}
