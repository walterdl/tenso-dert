using System;

// Own
using TensoDertBack.Interfaces.Repository;

namespace TensoDertBack.EFRepository
{
	public class EFRepositoryWork : IRepositoryWork
	{
		EFRepositoryDbContext dbContext;

		public EFRepositoryWork(string connectionString)
		{
			// Check for connectionString
			if (connectionString.Trim().Length == 0)
			{
				throw new ArgumentException("The connection string cannot be empty or be full of spaces.",
					nameof(connectionString));
			}

			dbContext = new EFRepositoryDbContext(connectionString);
		}

		public EFRepositoryDbContext GetDbContext
		{
			get
			{
				return dbContext;
			}
		}

		public void Complete()
		{
			throw new NotImplementedException();
		}
	}
}
