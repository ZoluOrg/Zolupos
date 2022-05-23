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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employees>().HasData(new Employees
            {
                Id = 1,
                FirstName = "Admin",
                LastName = "User",
                LastLogin = DateTime.UtcNow,
                Pin = "adminPassword",
                Role = "admin",
                ProfileURL = "https://ui-avatars.com/api/?name=Admin+User&background=random"
            });
        }
        public async Task<int> SaveChanges()
        {
            return await SaveChangesAsync();
        }
    }
}
