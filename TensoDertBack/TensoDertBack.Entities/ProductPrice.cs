namespace TensoDertBack.Entities
{
	public enum MeasurementUnits { Galon, Garrafo, Kg };

	public class ProductPrice
	{
		public int Id { get; set; }

		public MeasurementUnits MeasurementUnit { get; set; }

		public decimal Price { get; set; }

		public int ProductId { get; set; }

		public Product Product { get; set; }
	}
}