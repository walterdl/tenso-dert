namespace TensoDertBack.Entities
{
	public enum MeasurementUnits { Galon, Garrafa, Kg, Ninguno };

	public interface IProductPrice : IBasicEntityShape
	{
		MeasurementUnits MeasurementUnit { get; set; }

		decimal Price { get; set; }

		int ProductId { get; set; }

		IProduct Product { get; set; }
	}
}