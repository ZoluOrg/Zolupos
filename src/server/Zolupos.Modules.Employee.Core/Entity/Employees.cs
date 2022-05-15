using Zolupos.Modules.Employee.Core.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zolupos.Modules.Employee.Core.Entity
{
    public class Employees
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime LastLogin { get; set; }
        public string Pin { get; set; }
        public string Role { get; set; }
        public string ProfileURL { get; set; }

    }
}
