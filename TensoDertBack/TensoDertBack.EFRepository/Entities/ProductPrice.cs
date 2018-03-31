using System;

// Own
using TensoDertBack.Entities;

namespace TensoDertBack.EFRepository.Entities
{
	public class ProductPrice : IProductPrice
	{
		public int Id { get; set; }

		internal string measurementUnit { get; set; }

		public MeasurementUnits MeasurementUnit
		{
			get
			{
				bool resultObtained = Enum.TryParse(measurementUnit, out MeasurementUnits result);
				return resultObtained ? result : MeasurementUnits.Ninguno;
			}
			set
			{
				measurementUnit = Enum.GetName(typeof(MeasurementUnits), value);
			}
		}

		public decimal Price { get; set; }

		public int ProductId { get; set; }

		public IProduct Product { get; set; }
	}
}