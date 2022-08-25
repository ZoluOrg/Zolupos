using PaperRings.Context;
using PaperRings.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PaperRings.Feature.Customers
{
    public class CustomerQueries
    {
        public async Task<Customer> GetCustomers([Service] ApplicationDbContext context)
        {
            return await context.Customers.FirstOrDefaultAsync();
        }
    }
}
