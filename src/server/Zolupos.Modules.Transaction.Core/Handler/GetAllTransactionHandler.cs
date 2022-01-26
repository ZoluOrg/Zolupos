using MediatR;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Transaction.Core.Entity;
using Zolupos.Modules.Transaction.Core.Interface;
using Zolupos.Modules.Transaction.Core.Queries;
using Zolupos.Modules.Transaction.Core.DTO;
using System.Text.Json;


namespace Zolupos.Modules.Transaction.Core.Handler
{
    public class GetAllTransactionHandler : IRequestHandler<GetAllTransactionQuery, ICollection<TransactionRes>>
    {
        public readonly ITransactionDbContext _context;
        public readonly IMapper _mapper;
        public GetAllTransactionHandler(ITransactionDbContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }
        public async Task<ICollection<TransactionRes>> Handle(GetAllTransactionQuery request, CancellationToken cancellationToken)
        {
            var Transactions = await _context.UserTransactions.Include(ut => ut.OrderedProducts).ToListAsync();
            var mapped = _mapper.Map<ICollection<UserTransaction>, ICollection<TransactionRes>>(Transactions);
            return mapped;
        }
    }
}
