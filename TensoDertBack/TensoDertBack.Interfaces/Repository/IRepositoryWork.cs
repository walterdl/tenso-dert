using System.Threading.Tasks;

// Own
using TensoDertBack.Interfaces.Repository;

namespace TensoDertBack.Interfaces.Repository
{
	// TODO
	public interface IRepositoryWork
	{
		IProductsRepository ProductsRepository{ get; }

		IProductsCategoiesRepository ProductsCategoiesRepository { get; }

		IProductsPricesRepository ProductsPricesRepository { get; }

		void PrepareRepository();

		int Complete();

		Task<int> CompleteAsync();
	}
}