using System;

namespace TensoDertBack.Entities
{
	public enum StockMovementReason { Added, Removed };

	public class StockMovement
	{
		public int Id { get; set; }

		public DateTime Date { get; set; }

		public StockMovementReason MovementReason { get; set; }

		public int ProductPriceId { get; set; }
	}
}