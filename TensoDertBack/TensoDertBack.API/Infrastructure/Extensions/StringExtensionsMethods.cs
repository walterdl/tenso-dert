using System;

namespace TensoDertBack.API.Infrastructure.Extensions
{
	public static class StringExtensionMethods
	{
		// Convert the string to camel case.
		public static string ToCamelCase(this string stringParam)
		{
			// If there are 0 or 1 characters, just return the string.
			if (stringParam == null || stringParam.Length < 2)
			{
				return stringParam;
			}

			// Split the string into words.
			string[] words = stringParam.Split(
				new char[] { },
				StringSplitOptions.RemoveEmptyEntries);

			// Combine the words.
			string result = words[0].ToLower();
			for (int i = 1; i < words.Length; i++)
			{
				result +=
					words[i].Substring(0, 1).ToUpper() +
					words[i].Substring(1);
			}

			return result;
		}
	}
}