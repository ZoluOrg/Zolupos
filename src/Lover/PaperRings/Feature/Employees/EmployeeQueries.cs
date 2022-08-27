using Microsoft.EntityFrameworkCore;
using PaperRings.Context;
using PaperRings.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PaperRings.Feature.Employees
{
    [ExtendObjectType("Query")]
    public class EmployeeQueries
    {
        [UseSorting]
        [UseFiltering]
        public IEnumerable<Employee> GetEmployees(ApplicationDbContext context) {
            return context.Employees;
        }

        public async Task<Employee> GetEmployee(ApplicationDbContext context, int id)
        {
            return await context.Employees.Where(emp => emp.EmployeeId == id).FirstOrDefaultAsync();
        }
    }
}
