namespace TensoDertBack.Interfaces.Repository
{
	public interface IBasicRepository<TEntity>
	{
		// TODO
		// Is correct to say that the return type Task<TEntity>?
		TEntity Get(int id);

		// TODO
		// How to declare an filter function as an argument?
		TEntity GetAll();
	}
}