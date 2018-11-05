using AutoMapper;
using v3ga.Controllers.Resources;
using v3ga.Models;

namespace v3ga.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Make, MakeResource>();
            CreateMap<Model, ModelResource>();
        }
    }
}