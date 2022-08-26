using PaperRings.Context;
using PaperRings.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PaperRings.Feature.Employees
{
    [ExtendObjectType("Mutation")]
    public class EmployeeMutation
    {
        public async Task<Employee> AddEmployee([Service] ApplicationDbContext context, string firstName, string lastName, string fullName, int pin, string role, int phoneNumber)
        {
            var newEmployee = new Employee
            {
                FirstName = firstName,
                SurName = lastName,
                FullName = fullName,
                Pin = pin,
                Role = role,
                PhoneNumber = phoneNumber,
                LastLogin = DateTime.UtcNow,
            };

            await context.Employees.AddAsync(newEmployee);
            await context.SaveChangesAsync();
            return newEmployee;
        }
    }
}
