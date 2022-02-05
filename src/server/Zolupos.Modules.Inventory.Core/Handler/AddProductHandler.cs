using AutoMapper;
using MediatR;
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
    public class AddProductHandler : IRequestHandler<AddProductCommand, List<int>>
    {
        private readonly IMapper _mapper;
        private readonly IInventoryDbContext _context;
        public AddProductHandler(IMapper mapper, IInventoryDbContext context)
        {
            _mapper = mapper;
            _context = context;
        }
        public async Task<List<int>> Handle(AddProductCommand request, CancellationToken cancellationToken)
        {
            var reqDeserialize = JsonSerializer.Deserialize<ProductRequestModel>(request.productString);
            var idList = new List<int>();
            for(int i = 0; i != reqDeserialize.Products.Count; i++)
            {
                await _context.Products.AddAsync(reqDeserialize.Products[i]);
                await _context.SaveChanges();
                idList.Add(reqDeserialize.Products[i].ProductId);
            }
            return idList;
        }
    }
}
