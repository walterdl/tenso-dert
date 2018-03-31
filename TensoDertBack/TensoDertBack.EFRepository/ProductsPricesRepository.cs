using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

// Own
using TensoDertBack.Entities;
using TensoDertBack.Interfaces.Repository;
using TensoDertBack.EFRepository.Entities;

namespace TensoDertBack.EFRepository
{
	public class ProductsPricesRepository : IProductsPricesRepository
	{
		EFRepositoryDbContext dbContext;

		public ProductsPricesRepository(EFRepositoryDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

		public void Add(IProductPrice productPrice)
		{
			dbContext.ProductPrices.Add(productPrice as ProductPrice);
		}

		public async Task AddAsync(IProductPrice productPrice)
		{
			await dbContext.ProductPrices.AddAsync(productPrice as ProductPrice);
		}

		public void AddSet(ICollection<IProductPrice> entitiesToAdd)
		{
			var _entitiesToAdd = entitiesToAdd.Select(p => p as ProductPrice);
			dbContext.ProductPrices.AddRange(_entitiesToAdd);
		}

		public async Task AddSetAsync(ICollection<IProductPrice> entitiesToAdd)
		{
			var _entitiesToAdd = entitiesToAdd.Select(p => p as ProductPrice);
			await dbContext.ProductPrices.AddRangeAsync(_entitiesToAdd);
		}

		public IProductPrice Get(int id)
		{
			return dbContext.ProductPrices.Find(id);
		}

		public async Task<IProductPrice> GetAsync(int id)
		{
			ProductPrice productPrice = await dbContext.ProductPrices.FindAsync(id);
			return productPrice;
		}

		public ICollection<IProductPrice> GetSet()
		{
			ICollection<ProductPrice> productPrices = (from pp in dbContext.ProductPrices select pp).ToList();
			return productPrices.Select(p => p as IProductPrice).ToList();
		}

		public async Task<ICollection<IProductPrice>> GetSetAsync()
		{
			ICollection<ProductPrice> productPrices = await dbContext.ProductPrices.ToListAsync();
			return productPrices.Select(p => p as IProductPrice).ToList();
		}

		public IProductPrice Create(MeasurementUnits _MeasurementUnit, decimal _Price, IProduct _Product)
		{
			var entity = new ProductPrice()
			{
				MeasurementUnit = _MeasurementUnit,
				Price = _Price,
				Product = _Product
			};

			return entity;
		}
	}
}