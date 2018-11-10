using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using v3ga.Controllers.Resources;
using v3ga.Infrastructure;
using v3ga.Models;

namespace v3ga.Controllers {
    public class MakesController : Controller {
        private readonly VegaDbContext context;
        private readonly IMapper mapper;

        public MakesController (VegaDbContext context, IMapper mapper) {
            this.mapper = mapper;
            this.context = context;
        }

        [HttpGet ("/api/makes")]
        public async Task<IEnumerable<MakeResource>> GetMakes () {

            var makes = await context.Makes.Include (x => x.Models).ToListAsync ();
            return mapper.Map<List<Make>, List<MakeResource>> (makes);
        }

        [HttpGet ("/api/features")]
        public Task<IEnumerable<FeatureResource>> GetFeatures () {
            var result = new List<FeatureResource> ();
            result.Add (new FeatureResource { Id = 1, Name = "Feature1" });
            result.Add (new FeatureResource { Id = 2, Name = "Feature2" });
            result.Add (new FeatureResource { Id = 3, Name = "Feature3" });
            return Task.FromResult((IEnumerable<FeatureResource>)result);
        }
    }
}