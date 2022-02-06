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

namespace Zolupos.Modules.Inventory.Core.Handler
{
    public class EditProductHandler : IRequestHandler<EditProductCommand, int>
    {
        public readonly IMapper _mapper;
        public readonly IInventoryDbContext _context;

        public EditProductHandler(IMapper mapper, IInventoryDbContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<int> Handle(EditProductCommand request, CancellationToken cancellationToken)
        {
            var edit = JsonSerializer.Deserialize<Product>(request.editedProduct);
            edit.LastEdit = DateTime.UtcNow;
            edit.ProductId = request.id;
            _context.Products.Update(edit);
            await _context.SaveChanges();
            return request.id;
        }
    }
}
