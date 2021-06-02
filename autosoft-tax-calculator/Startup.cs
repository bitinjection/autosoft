using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using AutosoftTaxCalculator.Models;
using NHibernate;

using Entities = AutosoftTaxCalculator.Models.Repositories.Entities;

namespace AutosoftTaxCalculator
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
            services.AddControllersWithViews();

            // Handle XSRF Name for Header
            services.AddAntiforgery(options => {
                options.HeaderName = "X-XSRF-TOKEN";
            });

            //https://github.com/domaindrivendev/Swashbuckle.AspNetCore
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Application API",
                    Description = "Application Documentation",
                    Contact = new OpenApiContact { Name = "Author" },
                    License = new OpenApiLicense { Name = "MIT", Url = new Uri("https://en.wikipedia.org/wiki/MIT_License") }
                });
            });

            services.AddTransient<ITaxPolicyFactory, TaxPolicyFactory>();

            var sessionFactory = DbUtils.CreateSessionFactory();
            services.AddTransient<ISessionFactory>(x => sessionFactory);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IAntiforgery antiforgery)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            // Manually handle setting XSRF cookie. Needed because HttpOnly has to be set to false so that
            // Angular is able to read/access the cookie.
            app.Use((context, next) =>
            {
                if (context.Request.Method == HttpMethods.Get &&
                    (string.Equals(context.Request.Path.Value, "/", StringComparison.OrdinalIgnoreCase) ||
                     string.Equals(context.Request.Path.Value, "/home/index", StringComparison.OrdinalIgnoreCase)))
                {
                    var tokens = antiforgery.GetAndStoreTokens(context);
                    context.Response.Cookies.Append("XSRF-TOKEN",
                        tokens.RequestToken,
                        new CookieOptions() { HttpOnly = false });
                }

                return next();
            });

            //This would need to be locked down as needed (very open right now)
            app.UseCors((corsPolicyBuilder) => 
            {
                corsPolicyBuilder.AllowAnyOrigin();
                corsPolicyBuilder.AllowAnyMethod();
                corsPolicyBuilder.AllowAnyHeader();
                // Uncomment if you have any custom headers you need to expose
                // corsPolicyBuilder.WithExposedHeaders("X-InlineCount");
            });

            app.UseStaticFiles();

            // Enable middleware to serve generated Swagger as a JSON endpoint
            app.UseSwagger();

            // Enable middleware to serve swagger-ui assets (HTML, JS, CSS etc.)
            // Visit http://localhost:5000/swagger
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();

                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action}/{id?}");

                // Handle redirecting client-side routes to Customers/Index route
                endpoints.MapFallbackToController("Index", "Home");
            });

            this.setupExampleDatabase();
        }

    private void setupExampleDatabase()
    {
        var sessionFactory = DbUtils.CreateSessionFactory();

        using (var session = sessionFactory.OpenSession())
        using (var transaction = session.BeginTransaction())
        {
          var flatPolicy = new Entities.Policy { Name = "Fixed" };
          session.SaveOrUpdate(flatPolicy);

          var progressivePolicy = new Entities.Policy { Name = "Progressive" };
          session.SaveOrUpdate(progressivePolicy);


          var states = new List<string> {
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming"
        };

          Func<string, Entities.Policy> assignPolicy = (string s) =>
          {
            return (s == "Virginia" || s == "New York" || s == "California") ?
              progressivePolicy :
              flatPolicy;
          };

          states
          .Select(state => new Entities.State { Name = state, Policy = assignPolicy(state) })
          .ToList()
          .ForEach(state => session.SaveOrUpdate(state));

          transaction.Commit();
        }
    }
  }
}
