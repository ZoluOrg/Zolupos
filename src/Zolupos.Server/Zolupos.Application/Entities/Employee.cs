using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Application.Entities
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string SurName { get; set; }
        public string FullName => $"{FirstName} {SurName}";
        public int Pin { get; set; }
        public int PhoneNumber { get; set; }
        public DateTime LastLogin { get; set; }
    }
}
