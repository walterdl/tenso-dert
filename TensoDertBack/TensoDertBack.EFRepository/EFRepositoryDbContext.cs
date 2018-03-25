using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.DependencyInjection;

// Own
using TensoDertBack.Entities;

namespace TensoDertBack.EFRepository
{
	public partial class EFRepositoryDbContext : DbContext
	{
		string connectionString;

		public string ConnectionString
		{
			get
			{
				return connectionString;
			}
		}

		public DbSet<ProductCategory> ProductsCategories { get; set; }

		// Leaved here for reference
		// public EFRepositoryDbContext(DbContextOptions<EFRepositoryDbContext> options) : base(options)
		// { }

		internal EFRepositoryDbContext(string connectionString)
		{
			this.connectionString = connectionString;
		}

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(this.connectionString);
		}

		// OnModelCreating located at EFRepositoryDbContext_FluentAPI.cs
	}
}