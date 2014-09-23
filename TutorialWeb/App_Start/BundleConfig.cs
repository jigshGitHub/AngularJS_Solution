using System.Web;
using System.Web.Optimization;

namespace TutorialWeb
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {            
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            
            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/*.css"));

            bundles.Add(new ScriptBundle("~/bundles/tutorialApp")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .IncludeDirectory("~/Scripts/Factories", "*.js")
                .IncludeDirectory("~/Scripts/Filters", "*.js")
                .Include("~/Scripts/*.js"));

        }
    }
}