using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

// Own
using TensoDertBack.EFRepository.Entities;
using TensoDertBack.Interfaces.Repository;
using TensoDertBack.Entities;

namespace TensoDertBack.EFRepository
{
	internal class ProductsRepository : IProductsRepository
	{
		EFRepositoryDbContext dbContext;

		internal ProductsRepository(EFRepositoryDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

		public IProduct Get(int Id)
		{
			return dbContext.Products.Find(Id);
		}

		public async Task<IProduct> GetAsync(int Id)
		{
			Product product = await dbContext.Products.FindAsync(Id);
			return product;
		}

		public ICollection<IProduct> GetSet()
		{
			var products = (from p in dbContext.Products select p).ToList();
			return products.Select(p => p as IProduct).ToList();
		}

		public async Task<ICollection<IProduct>> GetSetAsync()
		{
			ICollection<Product> products = await dbContext.Products.ToListAsync();
			return products.Select(p => p as IProduct).ToList();
		}

		public void Add(IProduct product)
		{
			dbContext.Products.Add(product as Product);
		}

		public async Task AddAsync(IProduct product)
		{
			await dbContext.Products.AddAsync(product as Product);
		}

		public void AddSet(ICollection<IProduct> products)
		{
			var _products = products.Select(p => p as Product).ToList();
			dbContext.Products.AddRange(_products);
		}

		public async Task AddSetAsync(ICollection<IProduct> products)
		{
			var _products = products.Select(p => p as Product).ToList();
			await dbContext.Products.AddRangeAsync(_products);
		}

		public IProduct Create(string _Name, IProductCategory _ProductCategory)
		{
			var entity = new Product()
			{
				Name = _Name,
				ProductCategory = _ProductCategory
			};

			return entity;
		}
	}
}