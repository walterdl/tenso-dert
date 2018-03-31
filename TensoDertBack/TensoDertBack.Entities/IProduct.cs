using System.Collections.Generic;

namespace TensoDertBack.Entities
{
	public interface IProduct : IBasicEntityShape
	{
		string Name { get; set; }

		int ProductCategoryId { get; set; }

		IProductCategory ProductCategory { get; set; }

		ICollection<IProductPrice> ProductPrices { get; set; }
	}
}
