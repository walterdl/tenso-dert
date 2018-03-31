using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

// Own
using TensoDertBack.EFRepository.Entities;
using TensoDertBack.Entities;

namespace TensoDertBack.EFRepository
{
	public partial class EFRepositoryWork
	{
		public async void PrepareRepository()
		{
			if (dbContext.Database.GetPendingMigrations().Count() > 0)
			{
				await dbContext.Database.MigrateAsync();
			}

			if (ProductsRepository.GetSet().Count == 0)
			{
				var productsCategories = new IProductCategory[]
				{
					ProductsCategoiesRepository.Create("Línea automotriz"),
					ProductsCategoiesRepository.Create("Línea institucional"),
					ProductsCategoiesRepository.Create("Línea porcelanato"),
					ProductsCategoiesRepository.Create("Materias primas")
				};
				ProductsCategoiesRepository.AddSet(productsCategories);

				var product = ProductsRepository.Create("Ambientador Chicle", productsCategories[0]);
				ProductsRepository.Add(product);

				var productPrices = new IProductPrice[]
				{
					ProductsPricesRepository.Create(MeasurementUnits.Galon, 21100, product),
					ProductsPricesRepository.Create(MeasurementUnits.Garrafa, 99100, product)
				};
				ProductsPricesRepository.AddSet(productPrices);

				product = ProductsRepository.Create("Ambientador Gold", productsCategories[0]);
				ProductsRepository.Add(product);

				productPrices = new IProductPrice[]
				{
					ProductsPricesRepository.Create(MeasurementUnits.Galon, 30200, product),
					ProductsPricesRepository.Create(MeasurementUnits.Garrafa, 145000, product)
				};
				ProductsPricesRepository.AddSet(productPrices);

				product = ProductsRepository.Create("Aceite de transmisión sin IVA", productsCategories[3]);
				ProductsRepository.Add(product);

				var productPrice = ProductsPricesRepository.Create(MeasurementUnits.Kg, 4394, product);
				ProductsPricesRepository.Add(productPrice);

				Complete();
			}
		}
	}
}