using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheArcher.Context;
using TheArcher.Entities;

namespace TheArcher.Features.Employees
{
    public class EmployeeMutations
    {
        public record AddEmployee (string employeeFirstName, string employeeLastName);
        public async Task<int> AddEmployee(ApplicationDbContext context, AddEmployee employee)
        {
            await context.Employees.AddAsync(employee);
            return employee.Id;
        }
    }
}
