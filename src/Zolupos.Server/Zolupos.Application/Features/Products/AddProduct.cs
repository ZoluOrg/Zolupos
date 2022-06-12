using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Abstractions;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Products
{
    public class AddProductCommand : IRequest<ResultWrapper<int>>
    {
        public string ProductName { get; set; }
        public int ProductQuantity { get; set; }
        public string ProductBarcode { get; set; }
        public int ProductPrice { get; set; }
    }
    public class AddProductHandler : IRequestHandler<AddProductCommand, ResultWrapper<int>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;
        public AddProductHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<ResultWrapper<int>> Handle(AddProductCommand request, CancellationToken cancellationToken)
        {
            if (await _context.Products.Where(product => product.ProductBarcode == request.ProductBarcode).AnyAsync()) throw new Exception("Product with the same barcode exist");
            var product = _mapper.Map<Product>(request);
            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();

            return new ResultWrapper<int> { Receive = product.ProductId, Message = "" };
        }
    }
}
