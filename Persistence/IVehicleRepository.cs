using System.Collections.Generic;
using System.Threading.Tasks;
using v3ga.Controllers.Resources;
using v3ga.Models;

namespace v3ga.Persistence
{
    public interface IVehicleRepository
    {
         Task<Vehicle> GetVehicle (int id, bool includeRelated = true);

         Task<List<Vehicle>> GetVehicles(PagePref page);

         Task<List<Vehicle>> GetVehicles(Filter filter);
         void Add(Vehicle vehicle);
         void Remove(Vehicle vehicle);


    }
}