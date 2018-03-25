using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

// Own
using TensoDertBack.Interfaces;

namespace TensoDertBack.API.Infrastructure
{
	public class JsonResponsePreparer : IJsonResponsePreparer
	{
		public IActionResult NotFound(string message, object content = null)
		{
			throw new System.NotImplementedException();
		}

		public IActionResult Success(string message, object content = null)
		{
			throw new System.NotImplementedException();
		}

		public string FormatResponseToJson(string message, object content)
		{
			var response = new
			{
				message,
				content
			};

			return JsonConvert.SerializeObject(response);
		}
	}
}