using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheArcher.Context;
using TheArcher.Entities;

namespace TheArcher.Queries
{
    public class EmployeeQuery
    {
        [UseOffsetPaging(IncludeTotalCount = true)]
        public IQueryable<Employee> GetEmployees (ApplicationDbContext context)
        {
            return context.Employees;
        }
        
        public async Task<Employee?> GetEmployee (ApplicationDbContext context, int id)
        {
            return await context.Employees.Where(emp => emp.Id == id).FirstOrDefaultAsync();
        }
    }
}
