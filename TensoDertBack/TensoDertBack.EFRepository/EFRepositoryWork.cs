using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

// Own
using TensoDertBack.Interfaces.Repository;
using TensoDertBack.SharedSettingsProvider;

namespace TensoDertBack.EFRepository
{
	public partial class EFRepositoryWork : IRepositoryWork
	{
		EFRepositoryDbContext dbContext;
		IProductsRepository productsRepository;
		IProductsCategoiesRepository productsCategoiesRepository;
		IProductsPricesRepository productsPricesRepository;

		public EFRepositoryWork()
		{
			SettingsProvider sharedConfig = new SettingsProvider();
			Initialize(sharedConfig.GetConnectionString(ConnectionStrings.SQLServer));
		}

		public EFRepositoryWork(string connectionString)
		{
			Initialize(connectionString);
		}

		void Initialize(string connectionString)
		{
			// Check for connectionString
			if (connectionString.Trim().Length == 0)
			{
				throw new ArgumentException("The connection string cannot be empty or be full of spaces.",
					nameof(connectionString));
			}

			dbContext = new EFRepositoryDbContext(connectionString);
			productsRepository = new ProductsRepository(dbContext);
			productsCategoiesRepository = new ProductsCategoriesRepository(dbContext);
			productsPricesRepository = new ProductsPricesRepository(dbContext);
		}

		public EFRepositoryDbContext GetDbContext
		{
			get
			{
				return this.dbContext;
			}
		}

		public IProductsRepository ProductsRepository
		{
			get
			{
				return productsRepository;
			}
		}

		public IProductsCategoiesRepository ProductsCategoiesRepository
		{
			get
			{
				return productsCategoiesRepository;
			}
		}

		public IProductsPricesRepository ProductsPricesRepository
		{
			get
			{
				return productsPricesRepository;
			}
		}

		public int Complete()
		{
			return this.dbContext.SaveChanges();
		}

		public async Task<int> CompleteAsync()
		{
			int result = await this.dbContext.SaveChangesAsync();
			return result;
		}
	}
}
