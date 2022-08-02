using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Shared.Model;

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
            var productToRemove = await _context.Products.Where(product => product.ProductId == request.id).FirstOrDefaultAsync();
            if (productToRemove == null) throw new CustomError(Message: "Product does not exist.", Errors: "", StatusCode: System.Net.HttpStatusCode.NotFound);
            _context.Products.Remove(productToRemove);
            await _context.SaveChangesAsync();
            return new ResultWrapper<int> { Receive = productToRemove.ProductId, Message = "" };
        }
    }
}
