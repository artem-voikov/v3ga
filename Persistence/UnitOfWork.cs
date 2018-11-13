using System.Threading.Tasks;
using v3ga.Infrastructure;

namespace v3ga.Persistence
{
    public class UnitOfWork : IUnitOfWork {
        private VegaDbContext context;
        public UnitOfWork (VegaDbContext context) {
            this.context = context;
        }

        public async Task CompleteAsync () {
            await context.SaveChangesAsync ();
        }
    }
}