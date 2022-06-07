using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Customers
{
    public class AddCustomerCommand : IRequest<ResultWrapper<int>>
    {
        public string CustomerName { get; set; }
        public int CustomerPoint { get; set; }
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
            if (await _context.Customers.Where(customer => customer.CustomerName == request.CustomerName).AnyAsync()) throw new Exception("Customer already exist");
            var customer = _mapper.Map<Customer>(request);
            await _context.Customers.AddAsync(customer);
            await _context.SaveChangesAsync();

            return new ResultWrapper<int> { Receive = customer.CustomerId, Message = "" };
        }
    }
}
