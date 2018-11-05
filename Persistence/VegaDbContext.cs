using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using v3ga.Models;

namespace v3ga.Infrastructure
{
    public class VegaDbContext : DbContext
    {
        public VegaDbContext(DbContextOptions<VegaDbContext> options) 
            : base(options)
        {
        }


        public DbSet<Make> Makes { get; set; }
    }
}