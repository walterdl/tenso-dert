using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

// Own
using TensoDertBack.Entities;
using TensoDertBack.Interfaces.Repository;

namespace TensoDertBack.EFRepository
{
	internal class ProductsRepository : IProductsRepository
	{
		EFRepositoryDbContext dbContext;

		internal ProductsRepository(EFRepositoryDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

		public Product Get(int Id)
		{
			return dbContext.Products.Find(Id);
		}

		public async Task<Product> GetAsync(int Id)
		{
			Product product = await dbContext.Products.FindAsync(Id);
			return product;
		}

		public IEnumerable<Product> GetSet()
		{
			return dbContext.Products;
		}

		public async Task<IEnumerable<Product>> GetSetAsync()
		{
			IEnumerable<Product> products = await dbContext.Products.ToListAsync();
			return products;
		}
	}
}