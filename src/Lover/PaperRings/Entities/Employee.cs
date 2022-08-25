using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PaperRings.Entities
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public string FullName { get; set; }
        public int Pin { get; set; }
        public string Role { get; set; }
        public int PhoneNumber { get; set; }
        public DateTime LastLogin { get; set; }
        public string? Profile { get; set; }
    }
}
