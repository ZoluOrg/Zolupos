using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Text;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;
using Zolupos.Shared.Model;

namespace Zolupos.Application.Features.Customers
{
    public class AddCustomerCommand : IRequest<ResultWrapper<int>>
    {
        public string CustomerName { get; set; }
        public string CustomerFirstName { get; set; }
        public string CustomerLastName { get; set; }

        public string CustomerEmail { get; set; }
        public string CustomerPhoneNumber { get; set; }

        public int CustomerSpent { get; set; }
    }

    public class AddCustomerHandler : IRequestHandler<AddCustomerCommand, ResultWrapper<int>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;

        public AddCustomerHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ResultWrapper<int>> Handle(AddCustomerCommand request, CancellationToken cancellationToken)
        {
            if (await _context.Customers.Where(customer => customer.CustomerFirstName == request.CustomerName && customer.CustomerLastName == request.CustomerLastName).AnyAsync())
                throw new CustomError(Message: "Customer already exist", Errors: "", StatusCode: System.Net.HttpStatusCode.Conflict);
            var customer = _mapper.Map<Customer>(request);
            await _context.Customers.AddAsync(customer);
            await _context.SaveChangesAsync();

            return new ResultWrapper<int> { Receive = customer.CustomerId, Message = "" };
        }
    }

}
