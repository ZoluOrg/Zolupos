using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Inventory.Core.Command;
using Zolupos.Modules.Inventory.Core.Interface;
using Zolupos.Modules.Inventory.Core.Model;
using Zolupos.Modules.Inventory.Core.Entity;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Inventory.Core.Handler
{
    public class EditProductHandler : IRequestHandler<EditProductCommand, ResultWrapper<Product>>
    {
        public readonly IMapper _mapper;
        public readonly IInventoryDbContext _context;

        public EditProductHandler(IMapper mapper, IInventoryDbContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<ResultWrapper<Product>> Handle(EditProductCommand request, CancellationToken cancellationToken)
        {
            var prodcut = await _context.Products.Where(pr => pr.ProductId == request.ProductId).FirstAsync();
            if (prodcut == null) throw new Exception("No product found");
            if (await _context.Products.Where(pr => pr.BarCode == request.BarCode).AnyAsync(cancellationToken)) throw new Exception("Another product already have the same barcode");

            var productToSave = _mapper.Map<Product>(request);
            prodcut = productToSave;
            await _context.SaveChanges();
            return new ResultWrapper<Product>() { Value = prodcut, Message = "Updated" };
        }
    }
}
