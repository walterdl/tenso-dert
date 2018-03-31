using System.Collections.Generic;

// Own
using TensoDertBack.Entities;

namespace TensoDertBack.EFRepository.Entities
{
	public class ProductCategory : IProductCategory
	{
		public int Id { get; set; }

		public string Name { get; set; }

		public ICollection<IProduct> Products { get; set; }
	}
}