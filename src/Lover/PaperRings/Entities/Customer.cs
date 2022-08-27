using HotChocolate.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PaperRings.Entities
{
    [Authorize]
    public class Customer
    {
        public int CustomerId { get; set; }

        public string CustomerFirstName { get; set; }
        public string CustomerLastName { get; set; }
        public string CustomerFullName { get; set; }

        public string CustomerEmail { get; set; }
        public string CustomerPhoneNumber { get; set; }

        public int CustomerSpent { get; set; }

        public string? CustomerProfile { get; set; }
    }
}
