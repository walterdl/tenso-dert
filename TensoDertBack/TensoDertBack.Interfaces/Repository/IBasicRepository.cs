using System.Threading.Tasks;
using System.Collections.Generic;

namespace TensoDertBack.Interfaces.Repository
{
	public interface IBasicRepository<TEntity> where TEntity : class
	{
		TEntity Get(int id);

		Task<TEntity> GetAsync(int id);

		// TODO
		// How to declare an filter function as an argument?
		ICollection<TEntity> GetSet();

		Task<ICollection<TEntity>> GetSetAsync();

		void Add(TEntity entityToAdd);

		Task AddAsync(TEntity entityToAdd);

		void AddSet(ICollection<TEntity> entitiesToAdd);

		Task AddSetAsync(ICollection<TEntity> entitiesToAdd);
	}
}