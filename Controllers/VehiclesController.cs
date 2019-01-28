using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using v3ga.Controllers.Resources;
using v3ga.Infrastructure;
using v3ga.Infrastructure.Extensions;
using v3ga.Models;
using v3ga.Persistence;

namespace v3ga.Controllers {
    [Route ("/api/vehicles")]
    public class VehiclesController : Controller {
        private readonly IMapper mapper;
        private readonly IVehicleRepository vehicleRepository;
        private readonly IUnitOfWork unitOfWork;

        public VehiclesController (IMapper mapper, IVehicleRepository vehicleRepository, IUnitOfWork unitOfWork) {
            this.unitOfWork = unitOfWork;
            this.vehicleRepository = vehicleRepository;
            this.mapper = mapper; 
        }

        [HttpPost]
        public async Task<IActionResult> CreateVehicle ([FromBody] SaveVehicleResource vehicleResource) {
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            var vehicle = mapper.Map<SaveVehicleResource, Vehicle> (vehicleResource);
            vehicle.LastUpdate = DateTime.UtcNow;

            try {
                this.vehicleRepository.Add (vehicle);
                await unitOfWork.CompleteAsync();

                vehicle = await this.vehicleRepository.GetVehicle (vehicle.Id);

                var result = mapper.Map<Vehicle, VehicleResource> (vehicle);
                return Ok (result);
            } catch (Exception ex) {
                return BadRequest (ex);
            }
        }

        [HttpPut ("{id}")]
        public async Task<IActionResult> UpdateVehicle (int id, [FromBody] SaveVehicleResource vehicleResource) {
            if (!ModelState.IsValid)
                return BadRequest (ModelState);

            var vehicle = await this.vehicleRepository.GetVehicle (id);

            mapper.Map<SaveVehicleResource, Vehicle> (vehicleResource, vehicle);
            vehicle.LastUpdate = DateTime.UtcNow;

            try {
                await unitOfWork.CompleteAsync();

                vehicle = await vehicleRepository.GetVehicle(vehicle.Id);
                var result = mapper.Map<Vehicle, VehicleResource> (vehicle);
                return Ok (result);
            } catch (Exception ex) {
                return BadRequest (ex);
            } 
        }

        [HttpDelete ("{id}")]
        public async Task<IActionResult> DeleteVehicle (int id) {
            var vehicle = await vehicleRepository.GetVehicle (id, includeRelated : false);
            if (vehicle == null)
                return NotFound ();

        vehicleRepository.Remove (vehicle);
            await unitOfWork.CompleteAsync();

            return Ok (id);
        }


        [HttpGet ("{id}")]
        public async Task<IActionResult> Get (int id) {
            var vehicle = await this.vehicleRepository.GetVehicle (id);

            if (vehicle == null)
                return NotFound ();

            var vehicleResource = mapper.Map<Vehicle, VehicleResource> (vehicle);

            return Ok (vehicleResource);

        }

        public async Task<IActionResult> Get(PagePref page)
        {
            var vehicles = await this.vehicleRepository.GetVehicles(page);

            var response = mapper.Map<IEnumerable<Vehicle>, IEnumerable<VehicleResource>>(vehicles);

            return Ok(response );
        }

        [HttpGet("filtered")]
        public async Task<IActionResult> FilteredVehicles(FilterResource filterResource)
        {
            var filter = mapper.Map<FilterResource, Filter>(filterResource);

            var response = await this.vehicleRepository.GetVehicles(filter);

            return Ok(response);
        }
    }
}