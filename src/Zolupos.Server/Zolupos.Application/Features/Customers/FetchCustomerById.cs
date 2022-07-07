using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;
using Zolupos.Shared.Model;

namespace Zolupos.Application.Features.Customers
{
    public record FetchCustomerByIdQuery(int Id) : IRequest<ResultWrapper<Customer>>;
    public class FetchCustomerHandler : IRequestHandler<FetchCustomerByIdQuery, ResultWrapper<Customer>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;
        public FetchCustomerHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ResultWrapper<Customer>> Handle(FetchCustomerByIdQuery request, CancellationToken cancellationToken)
        {
            var customer = await _context.Customers.Where(customer => customer.CustomerId == request.Id).FirstAsync();
            if (customer == null)
                throw new CustomError(Message: "Customer does not exist", Errors: "", StatusCode: System.Net.HttpStatusCode.NotFound);
            return new ResultWrapper<Customer> { Receive = customer, Message = "" };
        }
    }
}
