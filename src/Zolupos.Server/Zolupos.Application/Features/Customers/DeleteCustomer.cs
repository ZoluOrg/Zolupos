using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interface;
using Zolupos.Application.Common.Wrapper;

namespace Zolupos.Application.Features.Customers
{
    public record DeleteCustomerCommand (int Id) : IRequest<ResultWrapper<int>>;
    public class DeleteCustomerHandler : IRequestHandler<DeleteCustomerCommand, ResultWrapper<int>>
    {
        private IApplicationDbContext _context;
        public DeleteCustomerHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ResultWrapper<int>> Handle(DeleteCustomerCommand request, CancellationToken cancellationToken)
        {
            var customerToDelete = await _context.Customers.Where(customer => customer.CustomerId == request.Id).FirstAsync();
            _context.Customers.Remove(customerToDelete);
            await _context.SaveChangesAsync();
            return new ResultWrapper<int> { Receive = customerToDelete.CustomerId, Message = ""};
        }
    }
}
