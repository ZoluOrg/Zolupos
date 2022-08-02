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
            var customerToDelete = await _context.Customers.Where(customer => customer.CustomerId == request.Id).FirstOrDefaultAsync();
            if (customerToDelete == null)
                throw new CustomError(Message: "Customer Already exist", Errors: "", StatusCode: System.Net.HttpStatusCode.Conflict);
            _context.Customers.Remove(customerToDelete);
            await _context.SaveChangesAsync();
            return new ResultWrapper<int> { Receive = customerToDelete.CustomerId, Message = ""};
        }
    }
}
