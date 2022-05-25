using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interface;

namespace Zolupos.Application.Features.Customers
{
    public record DeleteCustomerCommand (int Id) : IRequest<int>;
    public class DeleteCustomerHandler : IRequestHandler<DeleteCustomerCommand, int>
    {
        private IApplicationDbContext _context;
        public DeleteCustomerHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(DeleteCustomerCommand request, CancellationToken cancellationToken)
        {
            var customerToDelete = await _context.Customers.Where(customer => customer.CustomerId == request.Id).FirstAsync();
            _context.Customers.Remove(customerToDelete);
            await _context.SaveChangesAsync();
            return customerToDelete.CustomerId;
        }
    }
}
