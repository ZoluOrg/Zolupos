using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Core.Entity;

namespace Zolupos.Modules.Employee.Infrastructure.Context
{
    public class EmployeeDbContext : DbContext, IEmployeeDbContext
    {
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options) : base(options) { }
        public DbSet<Employees> Employees { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Employees>();
        }
        public async Task<int> SaveChanges()
        {
            return await this.SaveChangesAsync();
        }
    }
}
