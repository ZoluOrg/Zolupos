using Microsoft.EntityFrameworkCore;
using PaperRings.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PaperRings.Context
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> context) : base(context) { }

        protected override void OnModelCreating (ModelBuilder modelBuilder) { }
    }
}
