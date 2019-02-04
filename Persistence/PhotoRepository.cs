using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using v3ga.Infrastructure;
using v3ga.Models;

namespace v3ga.Persistence
{
    public class PhotoRepository : IPhotoRepository
    {
        public VegaDbContext Context { get; }
        public PhotoRepository(VegaDbContext context)
        {
            Context = context;
        }
        public Task<List<Photo>> GetPhotos(int vehicleId)
        {
            // var result = Context.Vehicles.Where(x=>x.Id == vehicleId).SelectMany(x=>x.Photos);
            // return result.ToListAsync();

            return Context.Photos.Where(x=>x.VehicleId ==vehicleId).ToListAsync();
        }
    }
}