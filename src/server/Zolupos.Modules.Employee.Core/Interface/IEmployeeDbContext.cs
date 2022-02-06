using Microsoft.EntityFrameworkCore;
using Zolupos.Modules.Employee.Core.Entity;

namespace Zolupos.Modules.Employee.Infrastructure.Context
{
    public interface IEmployeeDbContext
    {
        DbSet<Employees> Employees { get; set; }

        Task<int> SaveChanges();
    }
}