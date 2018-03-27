using System.Collections.Generic;
using System.Threading.Tasks;

// Own
using TensoDertBack.Entities;

namespace TensoDertBack.Interfaces.Repository
{
	public interface IProductsRepository
	{
		Product Get(int Id);

		Task<Product> GetAsync(int Id);

		IEnumerable<Product> GetSet();

		Task<IEnumerable<Product>> GetSetAsync();
	}
}