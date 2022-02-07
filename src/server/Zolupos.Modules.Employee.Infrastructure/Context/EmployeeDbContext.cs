using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Modules.Employee.Core.Entity;
using Zolupos.Modules.Employee.Core.Enum;

namespace Zolupos.Modules.Employee.Infrastructure.Context
{
    public class EmployeeDbContext : DbContext, IEmployeeDbContext
    {
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options) : base(options) { }
        public DbSet<Employees> Employees { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Employees>().Property(e => e.Level)
                .HasConversion(e => e.ToString(),e => (EmployeeLevel)Enum.Parse(typeof(EmployeeLevel),e));
        }
        public async Task<int> SaveChanges()
        {
            return await SaveChangesAsync();
        }
    }
}
