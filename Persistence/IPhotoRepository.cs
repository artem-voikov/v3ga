using System.Collections.Generic;
using System.Threading.Tasks;
using v3ga.Models;

namespace v3ga.Persistence
{
    public interface IPhotoRepository
    {
        Task<List<Photo>> GetPhotos(int vehicleId);
    }
}