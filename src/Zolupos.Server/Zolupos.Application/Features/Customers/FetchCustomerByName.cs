using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Entities;
using Zolupos.Shared.Model;

namespace Zolupos.Application.Features.Customers
{
    public record FetchCustomerByNameQuery (string Name) : IRequest<Customer>;
    public class FetchCustomerByNameHandler : IRequestHandler<FetchCustomerByNameQuery, Customer>
    {
        public IApplicationDbContext _context;
        public FetchCustomerByNameHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Customer> Handle(FetchCustomerByNameQuery request, CancellationToken cancellationToken)
        {
            var customer = await _context.Customers.Where(customer => customer.CustomerFullName == request.Name).FirstOrDefaultAsync();
            if (customer == null)
                throw new CustomError(Message: "Customer does not exist or SPELLING is wrong.", Errors: "", StatusCode: System.Net.HttpStatusCode.NotFound);

            return customer;
        }
    }
}
