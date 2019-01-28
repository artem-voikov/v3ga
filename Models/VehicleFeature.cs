using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace v3ga.Models
{
    [Table("VehicleFeatures")]
    public class VehicleFeature
    {
        public int VehicleId { get; set; }
        public int FeatureId { get; set; }
        [JsonIgnore]
        public Vehicle Vehicle{ get;set;}
        public Feature Feature { get; set; }
    }
}