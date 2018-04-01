using System.Collections.Generic;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

// Own
using TensoDertBack.Interfaces;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Serialization;

namespace TensoDertBack.API.Infrastructure
{
	public class JsonResponsePreparer : IJsonResponsePreparer
	{
		enum TypeOfResponse {Success, NotFound};
		IHttpContextAccessor httpContextAccessor;
		string jsonContentType = "application/json";

		static Dictionary<TypeOfResponse, string> defaultMessages = new Dictionary<TypeOfResponse, string>()
		{
			{TypeOfResponse.Success, "success"},
			{TypeOfResponse.NotFound, "not-found"},
		};

		public JsonResponsePreparer(IHttpContextAccessor httpContextAccessor)
		{
			this.httpContextAccessor = httpContextAccessor;
		}

		public IActionResult Success()
		{
			ContentResult contentResult = new ContentResult();
			contentResult.StatusCode = StatusCodes.Status200OK;
			contentResult.ContentType = jsonContentType;
			contentResult.Content = FormatResponseToJson(defaultMessages[TypeOfResponse.Success],
				new {});
			return contentResult;
		}

		public IActionResult Success(string message)
		{
			if (message.Trim().Length == 0)
			{
				message = defaultMessages[TypeOfResponse.Success];
			}

			ContentResult contentResult = new ContentResult();
			contentResult.StatusCode = StatusCodes.Status200OK;
			contentResult.ContentType = jsonContentType;
			contentResult.Content = FormatResponseToJson(message, new {});
			return contentResult;
		}

		public IActionResult Success(object content)
		{
			if (content == null)
			{
				content = new {};
			}

			ContentResult contentResult = new ContentResult();
			contentResult.StatusCode = StatusCodes.Status200OK;
			contentResult.ContentType = jsonContentType;
			contentResult.Content = FormatResponseToJson(
				defaultMessages[TypeOfResponse.Success], content);
			return contentResult;
		}

		public IActionResult Success(string message, object content)
		{
			if (message.Trim().Length == 0)
			{
				message = defaultMessages[TypeOfResponse.Success];
			}

			if (content == null)
			{
				content = new {};
			}

			ContentResult contentResult = new ContentResult();
			contentResult.StatusCode = StatusCodes.Status200OK;
			contentResult.ContentType = jsonContentType;
			contentResult.Content = FormatResponseToJson(message, content);
			return contentResult;
		}

		public IActionResult NotFound(string message, object content = null)
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

			return JsonConvert.SerializeObject(
				response,
				Formatting.Indented,
				new JsonSerializerSettings
				{
					ContractResolver = new CamelCasePropertyNamesContractResolver()
				});
		}
	}
}