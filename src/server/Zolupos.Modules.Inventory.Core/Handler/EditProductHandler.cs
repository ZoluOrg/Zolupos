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
            var prodcut = await _context.Products.Where(prod => prod.ProductId == request.model.EditedProduct.ProductId).SingleOrDefaultAsync(cancellationToken);
            if (prodcut == null) return new ResultWrapper<Product> { Value = null, Message = "Product does not exist." };

            var product = _mapper.Map<Product>(request.model.EditedProduct);
            await _context.SaveChanges();
            return new ResultWrapper<Product>() { Value = prodcut, Message = "Updated" };
        }
    }
}
