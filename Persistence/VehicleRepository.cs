using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using v3ga.Infrastructure;
using v3ga.Models;

namespace v3ga.Persistence {

    public class VehicleRepository : IVehicleRepository {
        private VegaDbContext context;
        public VehicleRepository (VegaDbContext context) {
            this.context = context;
        }

        public async Task<Vehicle> GetVehicle (int id, bool includeRelated = true) {

            if (!includeRelated)
                return await context.Vehicles.FindAsync (id);

            return await this.context.Vehicles
                .Include (x => x.Features)
                .ThenInclude (x => x.Feature)
                .Include (x => x.Model)
                .ThenInclude (x => x.Make)
                .SingleOrDefaultAsync (x => x.Id == id);
        }

        public void Add (Vehicle vehicle) {
            context.Vehicles.Add (vehicle);
        }

        public void Remove (Vehicle vehicle) {
            context.Vehicles.Remove (vehicle);
        }
    }
}