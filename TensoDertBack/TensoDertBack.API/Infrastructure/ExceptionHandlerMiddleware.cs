using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

// Own
using TensoDertBack.Interfaces;

namespace TensoDertBack.API.Infrastructure
{
	class ExceptionHandlerMiddleware
	{
		RequestDelegate requestDelegate;
		IHttpContextAccessor httpContextAccessor;
		IJsonResponsePreparer jsonResponsePreparer;

		public ExceptionHandlerMiddleware(
			RequestDelegate requestDelegate,
			IHttpContextAccessor httpContextAccessor,
			IJsonResponsePreparer jsonResponsePreparer)
		{
			this.requestDelegate = requestDelegate;
			this.httpContextAccessor = httpContextAccessor;
			this.jsonResponsePreparer = jsonResponsePreparer;
		}

		public async Task Invoke(HttpContext httpContext)
		{
			try
			{
				await requestDelegate.Invoke(httpContext);
			} catch (Exception ex)
			{
				string jsonResponse = jsonResponsePreparer.FormatResponseToJson(
					"Internal error. Exception handled by custom md.",
					new
					{
						stackTrace = ex.StackTrace,
						details = ex.Message
					}
				);

				httpContextAccessor.HttpContext.Response.Clear();
				httpContextAccessor.HttpContext.Response.StatusCode = (int)StatusCodes.Status500InternalServerError;
				httpContextAccessor.HttpContext.Response.ContentType = "application/json";
				await httpContextAccessor.HttpContext.Response.WriteAsync(jsonResponse);
			}
		}
	}
}