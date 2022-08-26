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
    [ExtendObjectType("Query")]
    public class CustomerQueries
    {
        public IQueryable<Customer> GetCustomers([Service] ApplicationDbContext context)
        {
            return context.Customers;
        }
        
        public IQueryable<Customer> GetCustomers([Service] ApplicationDbContext context, int id)
        {
            return context.Customers.Where(cust => cust.CustomerId == id);
        } 
    }
}
