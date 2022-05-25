using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interface;

namespace Zolupos.Application.Features.Products
{
    public record DeleteProductCommand(int id) : IRequest<int>;
    public class DeleteProductHandler : IRequestHandler<DeleteProductCommand, int>
    {
        private IApplicationDbContext _context;
        public DeleteProductHandler(IApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<int> Handle(DeleteProductCommand request, CancellationToken cancellationToken)
        {
            var productToRemove = await _context.Products.Where(product => product.ProductId == request.id).FirstAsync();
            _context.Products.Remove(productToRemove);
            await _context.SaveChangesAsync();
            return productToRemove.ProductId;
        }
    }
}
