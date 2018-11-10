using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace v3ga.Models
{
    [Table("Vehicles")]
    public class Vehicle
    {
        public int Id { get; set; }     
        public int ModelId { get; set; }    
        public Model Model { get; set; }
        public bool IsRegister { get; set; }


        [StringLength(255)]
         public string ContactEmail { get; set; }
         [Required]
         [StringLength(255)]
         public string ContactName { get; set; }
         [Required]
         [StringLength(255)]
         public string ContactPhone { get; set; }
         public DateTime LastUpdate { get; set; }

         public ICollection<VehicleFeature> Features { get; set; }

         public Vehicle()
         {
             this.Features = new Collection<VehicleFeature>();
         }
    }
}