using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.Command;
using Zolupos.Modules.Inventory.Core.DTO;
using Zolupos.Modules.Inventory.Core.Entity;
using Zolupos.Modules.Inventory.Core.Interface;
using Zolupos.Modules.Inventory.Core.Model;

namespace Zolupos.Modules.Inventory.Core.Handler
{
    public class AddProductHandler : IRequestHandler<AddProductCommand, int>
    {
        private readonly IMapper _mapper;
        private readonly IInventoryDbContext _context;
        public AddProductHandler(IMapper mapper, IInventoryDbContext context)
        {
            _mapper = mapper;
            _context = context;
        }
        public async Task<int> Handle(AddProductCommand request, CancellationToken cancellationToken)
        {
            if (await _context.Products.Where(pr => pr.BarCode == request.BarCode).AnyAsync()) throw new Exception("Product with the same barcode exist");
            var product = _mapper.Map<Product>(request);
            await _context.Products.AddAsync(product);
            await _context.SaveChanges();

            return product.ProductId;
        }
    }
}
