using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Transaction.Core.Command;
using Zolupos.Modules.Transaction.Core.Interface;
using Zolupos.Modules.Transaction.Core.Entity;

namespace Zolupos.Modules.Transaction.Core.Handler
{
    public class EditTransactionHandler : IRequestHandler<EditTransactionCommand, int>
    {
        public readonly IMapper _mapper;
        public readonly ITransactionDbContext _context;
        public EditTransactionHandler(IMapper mapper, ITransactionDbContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<int> Handle(EditTransactionCommand request, CancellationToken cancellationToken)
        {
            Console.WriteLine("EditTransaction");
            var toSave = JsonSerializer.Deserialize<UserTransaction>(request.editedTransaction);
            Console.WriteLine(toSave.OrderedProducts.Count);
            toSave.TransactionId = request.id;
            toSave.Date = DateTime.UtcNow;
            _context.UserTransactions.Update(toSave);
            await _context.SaveChanges();
            return request.id;
        }
    }
}
