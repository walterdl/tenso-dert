using System;
using Microsoft.AspNetCore.Mvc;

namespace TensoDertBack.Interfaces
{
	public interface IJsonResponsePreparer
	{
		IActionResult Success();

		IActionResult Success(string message);

		IActionResult Success(object content);

		IActionResult Success(string message, object content = null);

		IActionResult NotFound(string message, object content = null);

		string FormatResponseToJson(string message, object content);
	}
}