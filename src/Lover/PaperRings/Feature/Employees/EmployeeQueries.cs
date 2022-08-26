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
        public async Task<ICollection<Employee>> GetEmployees([Service] ApplicationDbContext context) {
            return await context.Employees.ToListAsync();
        }

        public async Task<Employee> GetEmployee([Service] ApplicationDbContext context, int id)
        {
            return await context.Employees.Where(emp => emp.EmployeeId == id).FirstOrDefaultAsync();
        }
    }
}
