using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using v3ga.Controllers.Resources;
using v3ga.Infrastructure;
using v3ga.Models;

namespace v3ga.Persistence {

    public class VehicleRepository : IVehicleRepository {
        private VegaDbContext context;
        public VehicleRepository (VegaDbContext context) {
            this.context = context;
        }

        public Task<List<Vehicle>> GetVehicles (PagePref page) {

            var query = context.Vehicles
                .Include (x => x.Features)
                .ThenInclude (x => x.Feature)
                .Include (x => x.Model)
                .ThenInclude (x => x.Make);

            var columnsMap = new Dictionary<string, Func<Vehicle, object>> {
                    ["model"] = x => x.Model.Name,
                    ["make"] = x => x.Model.Make.Name,
                    ["contact"] = x => x.ContactName,
                };

            //TODO: refactor badThing to Iqueryble

            if (string.IsNullOrWhiteSpace (page.Sorting) || !columnsMap.ContainsKey (page.Sorting)) {
                return query.Skip (page.PageLength * page.PageNumber).Take (page.PageLength).ToListAsync();
            }

            var badThing = page.IsDescending ?
                query.OrderByDescending (columnsMap[page.Sorting]) :
                query.OrderBy (columnsMap[page.Sorting]);

            badThing.Skip (page.PageLength * page.PageNumber).Take (page.PageLength);

            return query.ToListAsync ();
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

        public Task<List<Vehicle>> GetVehicles (Filter filter) {
            var result = this.context.Vehicles
                .Include (x => x.Features)
                .ThenInclude (x => x.Feature)
                .Include (x => x.Model)
                .ThenInclude (x => x.Make)
                .Where (x => x.Model.MakeId == filter.MakeId);

            return result.ToListAsync ();
        }
    }
}