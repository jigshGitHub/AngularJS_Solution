using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace MvcApplication1
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "routeOne",
                url: "routes/One",
                defaults: new { controller = "Routes", action = "One" });

            routes.MapRoute(
                name: "routeTwo",
                url: "routes/Two/{donuts}",
                defaults: new { controller = "Routes", action = "Two", donuts = UrlParameter.Optional });

            routes.MapRoute(
                name: "routeThree",
                url: "routes/Three",
                defaults: new { controller = "Routes", action = "Three" });

            routes.MapRoute(
                name: "login",
                url: "Account/Login",
                defaults: new { controller = "Account", action = "Login" });
            
            routes.MapRoute(
                name: "Default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" });
        }
    }
}