using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interface;
using Zolupos.Application.Common.Wrapper;

namespace Zolupos.Application.Features.Products
{
    public record DeleteProductCommand(int id) : IRequest<ResultWrapper<int>>;
    public class DeleteProductHandler : IRequestHandler<DeleteProductCommand, ResultWrapper<int>>
    {
        private IApplicationDbContext _context;
        public DeleteProductHandler(IApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<ResultWrapper<int>> Handle(DeleteProductCommand request, CancellationToken cancellationToken)
        {
            var productToRemove = await _context.Products.Where(product => product.ProductId == request.id).FirstAsync();
            _context.Products.Remove(productToRemove);
            await _context.SaveChangesAsync();
            return new ResultWrapper<int> { Receive = productToRemove.ProductId, Message = "" };
        }
    }
}
