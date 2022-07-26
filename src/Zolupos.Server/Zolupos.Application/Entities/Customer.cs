using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Application.Entities
{
    public class Customer
    {
        public int CustomerId { get; set; }

        public string CustomerFirstName { get; set; }
        public string CustomerLastName { get; set; }
        public string CustomerFullName { get; set; }

        public string CustomerEmail { get; set; }
        public string CustomerPhoneNumber { get; set; }

        public int CustomerSpent { get; set; }

        public string CustomerProfile { get; set; }

        public Customer()
        {
            CustomerFullName = $"{CustomerFirstName} {CustomerLastName}";
        }
    }
}
