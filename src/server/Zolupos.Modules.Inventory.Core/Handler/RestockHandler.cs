using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.Command;
using Zolupos.Modules.Inventory.Core.Interface;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Inventory.Core.Handler
{
    public class RestockHandler : IRequestHandler<RestockCommand, ResultWrapper<int>>
    {
        public readonly IMapper _mapper;
        public readonly IInventoryDbContext _context;

        public RestockHandler(IMapper mapper, IInventoryDbContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<ResultWrapper<int>> Handle(RestockCommand request, CancellationToken cancellationToken)
        {
            var toEdit = await _context.Products.FirstOrDefaultAsync(p => p.ProductId == request.id);
            toEdit.LastRestock = DateTime.UtcNow;
            toEdit.LastEdit = DateTime.UtcNow;
            toEdit.ProductQuantity += request.amount;
            _context.Products.Update(toEdit);
            await _context.SaveChanges();
            return new ResultWrapper<int> { Value = toEdit.ProductId, Message = "" };
        }
    }
}
