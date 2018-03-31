using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// Own
using TensoDertBack.Interfaces;
using TensoDertBack.Interfaces.Repository;
using TensoDertBack.API.Infrastructure.Extensions;

namespace TensoDertBack.API
{
	[Route("api/products-categories")]
	public class ProductsCategories : Controller
	{
        ILogger<ProductsCategories> logger;
        IJsonResponsePreparer responsePreparer;
        IRepositoryWork repositoryWork;

        public ProductsCategories(
			ILogger<ProductsCategories> logger,
			IJsonResponsePreparer responsePreparer,
			IRepositoryWork repositoryWork)
		{
			this.logger = logger;
			this.responsePreparer = responsePreparer;
			this.repositoryWork = repositoryWork;
		}

		[HttpGet("")]
		[HttpGet("get-all")]
		public IActionResult GetAll()
		{
			logger.LogDebug("Testing logging in GetAll()");
			return responsePreparer.Success("Hello there from GetAll");

			// TODO
			// implement here using Repository
		}
	}
}