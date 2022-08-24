using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheArcher.Entities
{
    public class Employee
    {
        public int Id { get; set; }
        public string EmployeeFirstName { get; set; }
        public string EmployeeLastName { get; set; }
        public DateTime EmployeeRegisterationDate { get; set; }
        public DateTime LastLogin { get; set; }
    }
}
