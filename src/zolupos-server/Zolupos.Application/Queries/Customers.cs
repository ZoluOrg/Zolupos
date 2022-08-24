using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Zolupos.Application.Common.Interfaces;
using Zolupos.Application.Common.Wrapper;
using Zolupos.Application.Entities;
using Zolupos.Application.Infrastructure.Context;

namespace Zolupos.Application.Queries
{
    public class Customers
    {
        [UsePaging]
        public IQueryable<Transaction> GetCustomers (ApplicationDbContext _context)
        {
            return _context.Transactions;
        }
    }
}
