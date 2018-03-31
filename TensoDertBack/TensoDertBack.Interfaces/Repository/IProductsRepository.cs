using System.Collections.Generic;
using System.Threading.Tasks;

// Own
using TensoDertBack.Entities;

namespace TensoDertBack.Interfaces.Repository
{
	public interface IProductsRepository : IBasicRepository<IProduct>
	{
		// Specialized members for IProductsRepository pending
		IProduct Create(string Name, IProductCategory ProductCategory);
	}
}