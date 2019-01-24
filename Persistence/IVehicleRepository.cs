using System.Collections.Generic;
using System.Threading.Tasks;
using v3ga.Models;

namespace v3ga.Persistence
{
    public interface IVehicleRepository
    {
         Task<Vehicle> GetVehicle (int id, bool includeRelated = true);

         IEnumerable<Vehicle> GetVehicles(PagePref page);
         void Add(Vehicle vehicle);
         void Remove(Vehicle vehicle);
    }
}