using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Http;

// Own
using TensoDertBack.Interfaces;
using TensoDertBack.Interfaces.Repository;
using TensoDertBack.API.Infrastructure;
using TensoDertBack.EFRepository;
using TensoDertBack.SharedSettingsProvider;

namespace TensoDertBack.API
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			// TODO
			// Define if the order here is important
			services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
			services.AddTransient<IJsonResponsePreparer, JsonResponsePreparer>();
			services.AddTransient<IRepositoryWork, EFRepositoryWork>(provider => {
				// Get connection string from appsettings.json here
				// return new EFRepositoryWork(Configuration.GetConnectionString("SQLServerDB"));
				return new EFRepositoryWork(
					new SettingsProvider().GetConnectionString(ConnectionStrings.Default)
				);
			});

			services.AddMvc();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			// Leaved here for reference purposes
			// if (env.IsDevelopment())
			// {
			//     app.UseDeveloperExceptionPage();
			// }

			app.UseMiddleware<ExceptionHandlerMiddleware>();
			app.UseMvc();
		}
	}
}
