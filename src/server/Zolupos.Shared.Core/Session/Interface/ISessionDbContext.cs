using Microsoft.EntityFrameworkCore;
using Zolupos.Shared.Core.Session.Entity;

namespace Zolupos.Shared.Core.Session.Interface
{
    public interface ISessionDbContext
    {
        DbSet<Sessions> Sessions { get; set; }
        Task<int> SaveChanges();
    }
}