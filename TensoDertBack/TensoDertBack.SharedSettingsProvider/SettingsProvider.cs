using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions;
using Microsoft.Extensions.Logging;

namespace TensoDertBack.SharedSettingsProvider
{
	public enum ConnectionStrings { Default, SQLServer, MySQL };

	public class SettingsProvider
	{
		IConfigurationBuilder configurationBuilder;
		ILogger logger;

		public SettingsProvider()
		{
			ILoggerFactory loggerFactory = new LoggerFactory()
				.AddConsole()
				.AddDebug();

			logger = loggerFactory.CreateLogger<SettingsProvider>();

			configurationBuilder = new ConfigurationBuilder().AddJsonFile("config.json");
		}

		public string GetConnectionString(ConnectionStrings connectionString)
		{
			IConfiguration configuration = configurationBuilder.Build();
			IConfigurationSection connStringsSection = configuration.GetSection("ConnectionStrings");

			if (!connStringsSection.Exists())
			{
				throw new InvalidDataException("config.json hasn't a ConnectionStrings section");
			}

			IEnumerable<IConfigurationSection> connStringChildren = connStringsSection.GetChildren();

			if (connStringChildren.Count() == 0)
			{
				throw new InvalidDataException("ConnectionStrings in config.json is empty");
			}

			string connectionStringValue = null;

			switch(connectionString)
			{
				case ConnectionStrings.Default:
					string defaultConnectionStringName = configuration.GetConnectionString(
						Enum.GetName(typeof(ConnectionStrings), ConnectionStrings.Default)
					);

					if (defaultConnectionStringName is string)
					{
						connectionStringValue = configuration.GetConnectionString(defaultConnectionStringName);
					}
					break;

				case ConnectionStrings.SQLServer:
					connectionStringValue = configuration.GetConnectionString(
						Enum.GetName(typeof(ConnectionStrings), ConnectionStrings.SQLServer)
					);
					break;

				// Leaved here as an example
				case ConnectionStrings.MySQL:
					connectionStringValue = configuration.GetConnectionString(
						Enum.GetName(typeof(ConnectionStrings), ConnectionStrings.MySQL)
					);
					break;

				default:
					connectionStringValue = null;
					break;
			}

			if (connectionStringValue == null)
			{
				throw new ArgumentException("The connection string is not specified in config.json, the argument given is null or isn't a single value.",
					nameof(connectionString));
			}

			if (connectionStringValue.Trim().Length == 0)
			{
				throw new ArgumentException($"The connection string with name {connectionString} is empty");
			}

			return connectionStringValue;
		}
	}
}