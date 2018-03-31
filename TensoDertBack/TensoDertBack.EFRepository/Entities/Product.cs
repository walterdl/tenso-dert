using System.Collections.Generic;

// Own
using TensoDertBack.Entities;

namespace TensoDertBack.EFRepository.Entities
{
	public class Product : IProduct
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public int ProductCategoryId { get; set; }

		public IProductCategory ProductCategory { get; set; }

		public ICollection<IProductPrice> ProductPrices { get; set; }
	}
}