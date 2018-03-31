using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

// Own
// using TensoDertBack.Entities;
using TensoDertBack.EFRepository.Entities;

namespace TensoDertBack.EFRepository
{
	public partial class EFRepositoryDbContext
	{
		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<ProductCategory>(buildAction => {
				buildAction.HasKey(p => p.Id);
				buildAction.Property(p => p.Id).UseSqlServerIdentityColumn();
				buildAction.Property(p  => p.Name).IsRequired().HasMaxLength(250);
			});

			modelBuilder.Entity<Product>(buildAction => {
				buildAction.HasKey(p => p.Id);
				buildAction.Property(p => p.Id).UseSqlServerIdentityColumn();
				buildAction.Property(p => p.Name).IsRequired().HasMaxLength(250);
				buildAction.HasOne(p => (ProductCategory)p.ProductCategory)
					.WithMany(c => (ICollection<Product>)c.Products)
					.HasForeignKey(p => p.ProductCategoryId).IsRequired();
			});

			modelBuilder.Entity<ProductPrice>(buildAction => {
				buildAction.HasKey(p => p.Id);
				buildAction.Property(p => p.Id).UseSqlServerIdentityColumn();
				buildAction.Ignore(p => p.MeasurementUnit);
				buildAction.Property(p => p.measurementUnit)
					.IsRequired().HasColumnName("MeasurementUnit");
				buildAction.Property(p => p.Price).IsRequired();
				buildAction.HasOne(p => (Product)p.Product)
					.WithMany(c => (ICollection<ProductPrice>)c.ProductPrices)
					.HasForeignKey(p => p.ProductId).IsRequired();
			});
		}
	}
}