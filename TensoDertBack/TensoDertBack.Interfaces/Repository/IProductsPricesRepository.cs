using TensoDertBack.Entities;

namespace TensoDertBack.Interfaces.Repository
{
	public interface IProductsPricesRepository : IBasicRepository<IProductPrice>
	{
		// Specialized members for IProductsCategoiesRepository pending
		IProductPrice Create(MeasurementUnits MeasurementUnit, decimal Price, IProduct Product);
	}
}