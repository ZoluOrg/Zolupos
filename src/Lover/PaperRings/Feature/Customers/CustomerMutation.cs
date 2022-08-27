using PaperRings.Context;
using PaperRings.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PaperRings.Feature.Customers
{
    [ExtendObjectType("Mutation")]
    public class CustomerMutation
    {
        public async Task<Customer> AddCustomer(ApplicationDbContext context, string customerFirstName, string customerLastName, string customerEmail, string customerPhoneNumber)
        {
            var newCustomer = new Customer
            {
                CustomerFirstName = customerFirstName,
                CustomerLastName = customerLastName,
                CustomerFullName = $"{customerFirstName} {customerLastName}",
                CustomerEmail = customerEmail,
                CustomerPhoneNumber = customerPhoneNumber,
            };

            await context.Customers.AddAsync(newCustomer);
            await context.SaveChangesAsync();

            return newCustomer;
        }
    }
}
