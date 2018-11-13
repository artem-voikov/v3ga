using System.Collections.Generic;
using System.Collections.ObjectModel;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace v3ga.Controllers.Resources {
    public class MakeResource : KeyValuePairResource {

        public ICollection<KeyValuePairResource> Models { get; set; }= new Collection<KeyValuePairResource> ();

    }
}