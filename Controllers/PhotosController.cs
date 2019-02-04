using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using v3ga.Controllers.Resources;
using v3ga.Models;
using v3ga.Persistence;

namespace v3ga.Controllers
{
    [Route("/api/vehicles/{vehicleid}/photos")]
    public class PhotosController : Controller
    {
        public IHostingEnvironment Host { get; }
        public IVehicleRepository VehicleRepository { get; }
        public IUnitOfWork UnitOfWork { get; }
        public IMapper Mapper { get; }
        public IPhotoRepository PhotoRepository { get; }
        public PhotoSettings PhotoSettings { get; }

        public PhotosController(IHostingEnvironment host, 
        IVehicleRepository vehicleRepository,
        IUnitOfWork unitOfWork,
        IMapper mapper,
        IOptionsSnapshot<PhotoSettings> photoSettings,
        IPhotoRepository photoRepository)
        {
            Host = host;
            VehicleRepository = vehicleRepository;
            UnitOfWork = unitOfWork;
            Mapper = mapper;
            PhotoRepository = photoRepository;
            PhotoSettings = photoSettings.Value;
        }

        [HttpGet]
        public async Task<IEnumerable<PhotoResource>> GetPhotos(int vehicleId)
        {
            var photos = await PhotoRepository.GetPhotos(vehicleId);

            return Mapper.Map<IEnumerable<Photo>, IEnumerable<PhotoResource>>(photos);
        }

        [HttpPost]
        public async Task<IActionResult> Upload(int vehicleid, IFormFile file)
        {
            var vehicle = await VehicleRepository.GetVehicle(vehicleid, includeRelated: false);

            if (vehicle == null)
                return NotFound();

            if(file == null)
                return BadRequest("Null file");
            if(file.Length == 0)
                return BadRequest("Empty file");
            
            if(file.Length > PhotoSettings.MaxBytes)
                return BadRequest($"File too big and its more than {PhotoSettings.MaxBytes}");
            
            if(!PhotoSettings.AcceptedFileTypes.Any(x => x == Path.GetExtension(file.FileName)))
                return BadRequest("Invalid file type");

            var uploadsFolderPath = EnsureFolderExists();
            var fileName = await SaveFile(file, uploadsFolderPath);
            var photo = await UpdateVehicle(vehicle, fileName);
            var result = Mapper.Map<Photo,PhotoResource>(photo);

            return Ok(result);
        }

        private async Task<Photo> UpdateVehicle(Vehicle vehicle, string fileName)
        {
            var photo = new Photo { FileName = fileName };

            vehicle.Photos.Add(photo);

            await UnitOfWork.CompleteAsync();

            return photo;
        }

        private static async Task<string> SaveFile(IFormFile file, string uploadsFolderPath)
        {
            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
            var filePath = Path.Combine(uploadsFolderPath, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return fileName;
        }

        private string EnsureFolderExists()
        {
            var uploadsFolderPath = Path.Combine(Host.WebRootPath, "Uploads");

            if(!Directory.Exists(uploadsFolderPath))
                Directory.CreateDirectory(uploadsFolderPath);

            return uploadsFolderPath;
        }
    }
}