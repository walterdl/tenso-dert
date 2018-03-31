using System.Collections.Generic;

namespace TensoDertBack.Entities
{
	public interface IProductCategory : IBasicEntityShape
	{
		string Name { get; set; }

		ICollection<IProduct> Products { get; set; }
	}
}