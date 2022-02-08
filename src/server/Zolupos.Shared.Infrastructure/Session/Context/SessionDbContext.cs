using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zolupos.Shared.Core.Session.Entity;
using Zolupos.Shared.Core.Session.Interface;

namespace Zolupos.Shared.Infrustructure.Session.Context
{
    public class SessionDbContext : DbContext, ISessionDbContext
    {
        public SessionDbContext(DbContextOptions<SessionDbContext> options) : base(options) { }
        public DbSet<Sessions> Sessions { get; set; }
        public async Task<int> SaveChanges()
        {
            return await SaveChangesAsync();
        }
    }
}
