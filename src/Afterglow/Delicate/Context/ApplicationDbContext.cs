using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TheArcher.Entities;

namespace TheArcher.Context
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Employee>().HasData(
                new Employee { 
                    Id = 1, 
                    EmployeeFirstName = "Taylor", 
                    EmployeeLastName = "Swift", 
                    EmployeeRegisterationDate = DateTime.UtcNow, 
                    LastLogin = DateTime.UtcNow 
                });
        }
    }
}
