// Own
using TensoDertBack.Interfaces;

namespace TensoDertBack.API
{
	public class ProductsController
	{
		IJsonResponsePreparer responsePreparer;

		public ProductsController(IJsonResponsePreparer responsePreparer)
		{
			this.responsePreparer = responsePreparer;
		}

		// TODO
		// ...
	}
}