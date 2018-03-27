using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

// Own
using TensoDertBack.SharedSettingsProvider;

namespace TensoDertBack.EFRepository
{
	public class EFRepositoryDbContextFactory : IDesignTimeDbContextFactory<EFRepositoryDbContext>
	{
		public EFRepositoryDbContext CreateDbContext(string[] args)
		{
			return new EFRepositoryDbContext(new SettingsProvider().GetConnectionString(ConnectionStrings.SQLServer));
		}
	}
}