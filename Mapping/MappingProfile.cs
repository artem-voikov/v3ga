using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using v3ga.Controllers.Resources;
using v3ga.Models;

namespace v3ga.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //Domain to API Resource
            CreateMap<Make, MakeResource>();
            CreateMap<Model, ModelResource>();
            CreateMap<Feature, FeatureResource>();
            CreateMap<Vehicle, VehicleResource>()
                .ForMember(target =>target.Contact, source => source
                        .MapFrom(x=> new ContactResource{ Email = x.ContactEmail, Name = x.ContactName, Phone = x.ContactPhone}))
                .ForMember(target => target.Features, source => source
                        .MapFrom(x=>x.Features.Select(y=>y.FeatureId)));

            //API Resource to Domain
            CreateMap<VehicleResource, Vehicle>()
                .ForMember(target => target.Id, source => source.Ignore())
                .ForMember(target=> target.ContactName, source => source.MapFrom(vr => vr.Contact.Name))
                .ForMember(target=> target.ContactEmail, source => source.MapFrom(vr => vr.Contact.Email))
                .ForMember(target=> target.ContactPhone, source => source.MapFrom(vr => vr.Contact.Phone))
                .ForMember(target => target.Features, source => source.Ignore())
                .AfterMap((source, target) =>{

                    //TODO: THIS IS A JOIN, redo
                    
                    //Remove unselected features
                    var removedFeatures = new List<VehicleFeature>();
                    foreach(var f in target.Features)
                        if(source.Features.Contains(f.FeatureId))
                            removedFeatures.Add(f);
                    foreach(var f in removedFeatures)
                        target.Features.Remove(f);
                    
                    //Add new features
                    foreach(var id in source.Features)
                        if(!target.Features.Any(x=>x.FeatureId == id))
                            target.Features.Add(new VehicleFeature{ FeatureId = id});
                });
        }
    }
}