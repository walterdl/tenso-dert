// using System;
// using System.IO;
// using System.Reflection;
// using Microsoft.Extensions.Configuration;

// namespace TensoDertBack.API.Infrastructure
// {
// 	public enum ConnectionStrings { Default, SQLServer, MySQL };

// 	public class SettingsProvider
// 	{
// 		IConfigurationBuilder configurationBuilder;

// 		public SettingsProvider()
// 		{
// 			configurationBuilder = new ConfigurationBuilder()
// 				.SetBasePath(Directory.GetCurrentDirectory())
// 				.AddJsonFile("appsettings.json");
// 		}

// 		public string GetConnectionString(ConnectionStrings connectionString)
// 		{
// 			IConfiguration configuration = configurationBuilder.Build();
// 			string connectionStringName;

// 			switch(connectionString)
// 			{
// 				case ConnectionStrings.Default:
// 					connectionStringName = configuration.GetConnectionString(
// 						Enum.GetName(typeof(ConnectionStrings), (int)ConnectionStrings.Default)
// 					);
// 					break;

// 				case ConnectionStrings.SQLServer:
// 					connectionStringName = configuration.GetConnectionString(
// 						Enum.GetName(typeof(ConnectionStrings), (int)ConnectionStrings.SQLServer)
// 					);
// 					break;

// 				// Leaved here as an example
// 				case ConnectionStrings.MySQL:
// 					connectionStringName = configuration.GetConnectionString(
// 						Enum.GetName(typeof(ConnectionStrings), (int)ConnectionStrings.MySQL)
// 					);
// 					break;

// 				default:
// 					connectionStringName = null;
// 					break;
// 			}

// 			if (connectionStringName == null)
// 			{
// 				throw new ArgumentException("The argument given is null.", nameof(connectionString));
// 			}

// 			string connectionStringValue = configuration.GetConnectionString(connectionStringName);

// 			if (connectionStringValue == null || connectionStringValue.Trim().Length == 0)
// 			{
// 				throw new ArgumentException("The connection string is not specified in config.json");
// 			}

// 			return connectionStringValue;
// 		}
// 	}
// }