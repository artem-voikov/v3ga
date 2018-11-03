using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;

namespace v3ga.Infrastructure
{
    public class VegaDbContext : DbContext
    {
        public VegaDbContext(DbContextOptions<VegaDbContext> options) 
            : base(options)
        {
        }


    }
}