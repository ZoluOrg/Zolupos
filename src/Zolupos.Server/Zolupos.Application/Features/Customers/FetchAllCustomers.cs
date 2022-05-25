using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Application.Common.Interface;
using Zolupos.Application.Entities;

namespace Zolupos.Application.Features.Customers
{
    public record FetchAllCustomersQuery : IRequest<ICollection<Customer>>;
    public class FetchAllCustomersHandler : IRequestHandler<FetchAllCustomersQuery, ICollection<Customer>>
    {
        private IApplicationDbContext _context;
        private IMapper _mapper;
        public FetchAllCustomersHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ICollection<Customer>> Handle(FetchAllCustomersQuery request, CancellationToken cancellationToken)
        {
            var customers = await _context.Customers.ToListAsync();
            return customers;
        }
    }
}
