using SNOW.SHOP.WEBSPA;
using Microsoft.AspNetCore.Antiforgery;

using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.DataProtection;

//using Microsoft.eShopOnContainers.BuildingBlocks;

using Microsoft.Extensions.HealthChecks;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
//using SNOW.SHOP.WEBSPA.Infrastructure;

namespace SNOW_SHOP_WEBSPA
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        //--->
        private IHostingEnvironment _hostingEnv;

        public Startup(IHostingEnvironment env)
        {
            _hostingEnv = env;

            var localPath = new Uri(Configuration["ASPNETCORE_URLS"])?.LocalPath ?? "/";
            Configuration["BaseUrl"] = localPath;
        }
        
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddCors(options => { options.AddPolicy("Access-Control-Allow-Origin", builder => builder.WithOrigins("http://localhost:59185")); });

            services.AddHealthChecks(checks =>
            {
                var minutes = 1;
                if (int.TryParse(Configuration["HealthCheck:Timeout"], out var minutesParsed))
                {
                    minutes = minutesParsed;
                }
                checks.AddUrlCheck("http://localhost:53423/api/category/categories", TimeSpan.FromMinutes(minutes));
                //checks.AddUrlCheck(Configuration["catalogAttributesUrl"], TimeSpan.FromMinutes(minutes));
                //checks.AddUrlCheck(Configuration["OrderingUrlHC"], TimeSpan.FromMinutes(minutes));
                //checks.AddUrlCheck(Configuration["BasketUrlHC"], TimeSpan.FromMinutes(minutes));
                //checks.AddUrlCheck(Configuration["IdentityUrlHC"], TimeSpan.FromMinutes(minutes));
                //checks.AddUrlCheck(Configuration["MarketingUrlHC"], TimeSpan.FromMinutes(minutes));
            });

            services.Configure<AppSettings>(Configuration);
            /*
            if (Configuration.GetValue<string>("IsClusterEnv") == bool.TrueString)
            {
                services.AddDataProtection(opts =>
                {
                    opts.ApplicationDiscriminator = "snow.shop.webspa";
                })
                .PersistKeysToRedis(Configuration["DPConnectionString"]);
            }
           */

            services.AddCors(options=> {
               options.AddPolicy("AllowSpecificOrigin",
                                    builder => builder.WithOrigins("http://localhost:53423"));
                                        });
            services.AddAntiforgery(options => options.HeaderName = "X-XSRF-TOKEN");

            services.AddMvc()
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                });
        }
        //<---

        /*
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }
        */

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvcWithDefaultRoute();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });

         
        }
        
    }
}
