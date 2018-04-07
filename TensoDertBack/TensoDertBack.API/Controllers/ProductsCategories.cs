using System.Threading.Tasks;
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
		public async Task<IActionResult> GetAllAsync()
		{
			var productsCategories = await repositoryWork.ProductsCategoiesRepository.GetSetAsync();
			// Intentional timeout
			// await Task.Delay(5000);
			return responsePreparer.Success(productsCategories);
		}
	}
}