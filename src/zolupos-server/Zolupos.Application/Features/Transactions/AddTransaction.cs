using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Enums;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Transactions
{
    public class AddTransactionCommand : IRequest<ResultWrapper<int?>>
    {
        public int? CustomerId { get; set; }
        public float Vat { get; set; }
        public float Total { get; set; }
        public float SubTotal { get; set; }
        public int Discount { get; set; }
        public virtual List<AddOrderedProduct> OrderedProducts { get; set; }
        public virtual List<AddPayment> Payments { get; set; }
    }
    public class AddOrderedProduct
    {
        public int Quantity { get; set; }
        public float BunchTotal { get; set; }
        public bool WithVat { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int ProductUnitPrice { get; set; }
        public int ProductUnitCost { get; set; }
    }
    public class AddPayment
    {
        public int PaymentType { get; set; }
        public float Tendered { get; set; }
        public float Change { get; set; }
        public float Amount { get; set; }
    }
    public class AddTrasactionHandler : IRequestHandler<AddTransactionCommand, ResultWrapper<int?>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;
        public AddTrasactionHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ResultWrapper<int?>> Handle(AddTransactionCommand request, CancellationToken cancellationToken)
        {
            var mappedTransaction = _mapper.Map<Transaction>(request);
            mappedTransaction.Reference = Guid.NewGuid();
            mappedTransaction.TransactedAt = DateTime.UtcNow;
            await _context.Transactions.AddAsync(mappedTransaction);
            await _context.SaveChangesAsync();

            return new ResultWrapper<int?> { Receive = mappedTransaction.CustomerId, Message = "" };
        }
    }
}
