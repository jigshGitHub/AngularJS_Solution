using System.Web;
using System.Web.Optimization;

namespace TutorialTypeScriptWeb
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/*.css"));

            bundles.Add(new ScriptBundle("~/Scripts/assets").Include("~/Scripts/assets/*.js"));
            bundles.Add(new ScriptBundle("~/Scripts/modules/validation").Include("~/Scripts/modules/validation/*.js"));
            bundles.Add(new ScriptBundle("~/Scripts/controllers").Include("~/Scripts/controllers/*.js"));
            bundles.Add(new ScriptBundle("~/Scripts/models").Include("~/Scripts/models/*.js"));
            bundles.Add(new ScriptBundle("~/Scripts/services").Include("~/Scripts/services/*.js"));
            bundles.Add(new ScriptBundle("~/Scripts/directives").Include("~/Scripts/directives/*.js"));            
            bundles.Add(new ScriptBundle("~/Scripts/app").Include("~/Scripts/app/*.js"));
        }
    }
}