using System.Collections.Generic;

namespace TensoDertBack.Entities
{
	public class Product
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public int ProductCategoryId { get; set; }

		public ProductCategory ProductCategory { get; set; }

		public ICollection<ProductPrice> ProductPrices { get; set; }
	}
}