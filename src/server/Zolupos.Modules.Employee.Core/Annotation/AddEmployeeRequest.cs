using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Core.Enum;

namespace Zolupos.Modules.Employee.Core.Annotation
{
    public class AddEmployeeRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Pin { get; set; }
        public string Role { get; set; }
        public string ProfileURL { get; set; }
    }
}
