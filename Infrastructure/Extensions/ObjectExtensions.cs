using Newtonsoft.Json;

namespace v3ga.Infrastructure.Extensions
{
    public static class ObjectExtensions
    {
        public static string ToJson(this object target)
        {
            var settings = new JsonSerializerSettings();
            settings.NullValueHandling = NullValueHandling.Ignore;
            settings.DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate;
            settings.ObjectCreationHandling = ObjectCreationHandling.Auto;
            settings.ReferenceLoopHandling = ReferenceLoopHandling.Error;
            settings.Error = (ser, err) => {
                err.ErrorContext.Handled = true;
            };

            settings.Formatting = Formatting.None;

            var result = JsonConvert.SerializeObject(target, settings);

            return result;
        }
    }
}