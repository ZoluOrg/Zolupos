﻿using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Inventory.Core.DTO;
using Zolupos.Modules.Inventory.Core.Entity;
using Zolupos.Modules.Inventory.Core.Interface;
using Zolupos.Modules.Inventory.Core.Queries;
using Zolupos.Shared.Core.Wrapper;

namespace Zolupos.Modules.Inventory.Core.Handler
{
    public class GetAllProductHandler : IRequestHandler<GetAllProductQuery, ResultWrapper<ICollection<ProductDTO>>>
    {
        public readonly IInventoryDbContext _context;
        public readonly IMapper _mapper;
        public GetAllProductHandler(IInventoryDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<ResultWrapper<ICollection<ProductDTO>>> Handle(GetAllProductQuery request, CancellationToken cancellationToken)
        {
            var Products = await _context.Products.ToListAsync();
            var mapped = _mapper.Map<ICollection<ProductDTO>>(Products);
            return new ResultWrapper<ICollection<ProductDTO>> { Value = mapped, Code = System.Net.HttpStatusCode.OK, Message = "" };
        }
    }
}
