using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.DTO;
using Zolupos.Modules.Inventory.Core.Interface;
using Zolupos.Modules.Inventory.Core.Queries;
using Zolupos.Modules.Inventory.Core.Entity;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Inventory.Core.Handler
{
    public class GetProductByIdHandler : IRequestHandler<GetProductByIdQuery, ResultWrapper<ProductDTO>>
    {
        public readonly IMapper _mapper;
        public readonly IInventoryDbContext _context;
        public GetProductByIdHandler(IMapper mapper, IInventoryDbContext context)
        {
            _mapper = mapper;
            _context = context;
        }
        public async Task<ResultWrapper<ProductDTO>> Handle(GetProductByIdQuery request, CancellationToken cancellationToken)
        {
            var Product = await _context.Products.FirstOrDefaultAsync(p => p.ProductId == request.id);
            var mapped = _mapper.Map<Product, ProductDTO>(Product);
            return new ResultWrapper<ProductDTO> { Data = mapped, Code = System.Net.HttpStatusCode.OK, Message = "" };
        }
    }
}
