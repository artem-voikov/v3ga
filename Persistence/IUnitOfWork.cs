using System.Threading.Tasks;

namespace v3ga.Persistence {

    public interface IUnitOfWork {
        Task CompleteAsync ();
    }
}