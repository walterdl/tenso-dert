using System.Threading.Tasks;

// Own
using TensoDertBack.Interfaces.Repository;

namespace TensoDertBack.Interfaces.Repository
{
	// TODO
	public interface IRepositoryWork
	{
		IProductsRepository ProductsRepository{ get; }

		int Complete();

		Task<int> CompleteAsync();
	}
}