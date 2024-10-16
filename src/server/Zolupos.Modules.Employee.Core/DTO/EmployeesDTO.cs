﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Core.Enum;

namespace Zolupos.Modules.Employee.Core.DTO
{
    public class EmployeesDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime LastLogin { get; set; }
        public string PinHashed { get; set; }
        public EmployeeLevel Level { get; set; }
    }
}
