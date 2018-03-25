using Microsoft.EntityFrameworkCore;

// Own
using TensoDertBack.Entities;

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
				buildAction.HasOne(p => p.ProductCategory).WithMany(c => c.Products)
					.HasForeignKey(p => p.ProductCategoryId).IsRequired();
			});

			modelBuilder.Entity<ProductPrice>(buildAction => {
				buildAction.HasKey(p => p.Id);
				buildAction.Property(p => p.Id).UseSqlServerIdentityColumn();
				buildAction.Property(p => p.MeasurementUnit).IsRequired();
				buildAction.Property(p => p.Price).IsRequired();
				buildAction.HasOne(p => p.Product).WithMany(c => c.ProductPrices)
					.HasForeignKey(p => p.ProductId).IsRequired();
			});

			// modelBuilder.Entity<Stock>
		}
	}
}