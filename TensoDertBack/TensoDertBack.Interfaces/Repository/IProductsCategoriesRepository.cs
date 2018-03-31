using System.Collections.Generic;
using System.Threading.Tasks;

// Own
using TensoDertBack.Entities;

namespace TensoDertBack.Interfaces.Repository
{
	public interface IProductsCategoiesRepository : IBasicRepository<IProductCategory>
	{
		// Specialized members for IProductsCategoiesRepository pending
		IProductCategory Create(string Name, ICollection<IProduct> Products = null);
	}
}