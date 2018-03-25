using Microsoft.AspNetCore.Mvc;

// Own
using TensoDertBack.Interfaces;
using TensoDertBack.Interfaces.Repository;
using TensoDertBack.API.Infrastructure.Extensions;

namespace TensoDertBack.API
{
	[Route("api/products-categories")]
	class ProductsCategories : Controller
	{
		IJsonResponsePreparer responsePreparer;
		IRepositoryWork repositoryWork;

		public ProductsCategories(IJsonResponsePreparer responsePreparer, IRepositoryWork repositoryWork)
		{
			this.responsePreparer = responsePreparer;
			this.repositoryWork = repositoryWork;
		}

		// [HttpGet("")]
		// [HttpGet("get-all")]
		// public IActionResult GetAll()
		// {
			// TODO
			// implement here using Repository
		// }
	}
}