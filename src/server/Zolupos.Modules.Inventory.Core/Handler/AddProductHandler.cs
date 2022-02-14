using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.Annotation;
using Zolupos.Modules.Inventory.Core.Command;
using Zolupos.Modules.Inventory.Core.DTO;
using Zolupos.Modules.Inventory.Core.Entity;
using Zolupos.Modules.Inventory.Core.Interface;
using Zolupos.Modules.Inventory.Core.Model;

namespace Zolupos.Modules.Inventory.Core.Handler
{
    public class AddProductHandler : IRequestHandler<AddProductCommand, List<ProductDTO>>
    {
        private readonly IMapper _mapper;
        private readonly IInventoryDbContext _context;
        public AddProductHandler(IMapper mapper, IInventoryDbContext context)
        {
            _mapper = mapper;
            _context = context;
        }
        public async Task<List<ProductDTO>> Handle(AddProductCommand request, CancellationToken cancellationToken)
        {
            var products = new List<ProductDTO>();
            var mapped = _mapper.Map<List<Product>>(request.request.Products);
            for (int i = 0; i != mapped.Count(); i++)
            {
                var toSave = mapped[i];
                await _context.Products.AddAsync(toSave);
                await _context.SaveChanges();

                var saveMapped = _mapper.Map<ProductDTO>(toSave);
                products.Add(saveMapped);
            }
            return products;
        }
    }
}
