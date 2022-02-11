using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Core.Entity;
using Zolupos.Modules.Employee.Core.Enum;

namespace Zolupos.Modules.Authentication.Core.Model
{
    public class AuthResponse
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime LastLogin { get; set; }
        public string PinHashed { get; set; }
        public EmployeeLevel Level { get; set; }
        public string Token { get; set; }
        public AuthResponse(Employees employee, string token)
        {
            Id = employee.Id;
            FirstName = employee.FirstName;
            LastName = employee.LastName;
            LastLogin = employee.LastLogin;
            PinHashed = employee.PinHashed;
            Level = employee.Level;
            Token = token;
        }
    }
}
