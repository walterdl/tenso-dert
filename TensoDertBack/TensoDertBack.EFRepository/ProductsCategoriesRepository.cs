using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

// Own
using TensoDertBack.Entities;
using TensoDertBack.EFRepository.Entities;
using TensoDertBack.Interfaces.Repository;

namespace TensoDertBack.EFRepository
{
	public class ProductsCategoriesRepository : IProductsCategoiesRepository
	{
		EFRepositoryDbContext dbContext;

		public ProductsCategoriesRepository(EFRepositoryDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

		public IProductCategory Get(int id)
		{
			return dbContext.ProductsCategories.Find(id);
		}

		public async Task<IProductCategory> GetAsync(int id)
		{
			IProductCategory productCategory = await dbContext.ProductsCategories.FindAsync(id);
			return productCategory;
		}

		public ICollection<IProductCategory> GetSet()
		{
			var queryResult = (from p in dbContext.ProductsCategories select p).ToList();
			return queryResult.Select(p => p as IProductCategory).ToList();
		}

		public async Task<ICollection<IProductCategory>> GetSetAsync()
		{
			var productsCategories = await dbContext.ProductsCategories.ToListAsync();
			return productsCategories.Select(p => p as IProductCategory).ToList();
		}

		public async Task<ICollection<IProductCategory>> GetSetAsync(Func<IProductCategory, bool> filter)
		{
			var productsCategories = await dbContext.ProductsCategories.ToListAsync();
			return productsCategories.Where(filter).Select(p => p as IProductCategory).ToList();
		}

		public void Add(IProductCategory productCategory)
		{
			dbContext.ProductsCategories.Add(productCategory as ProductCategory);
		}

		public async Task AddAsync(IProductCategory productCategory)
		{
			await dbContext.ProductsCategories.AddAsync(productCategory as ProductCategory);
		}

		public void AddSet(ICollection<IProductCategory> productsCategories)
		{
			var _productsCategories = productsCategories.Select(p => p as ProductCategory);
			dbContext.ProductsCategories.AddRange(_productsCategories);
		}

		public async Task AddSetAsync(ICollection<IProductCategory> productsCategories)
		{
			var _productsCategories = productsCategories.Select(p => p as ProductCategory);
			await dbContext.ProductsCategories.AddRangeAsync(_productsCategories);
		}

		public IProductCategory Create(string _Name, ICollection<IProduct> _Products = null)
		{
			var entity = new ProductCategory()
			{
				Name = _Name,
				Products = _Products
			};

			return entity;
		}
	}
}