using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Threading.Tasks;
namespace MvcApplication1.Controllers
{
    [Authorize]
    public class AccountController : Controller
    {
        
        [AllowAnonymous]
        public ActionResult Login()
        {
            return View();
        }

        //[HttpPost]
        //[AllowAnonymous]
        //public bool Login(object loginModel)
        //{
        //    return true;
        //}

    }
}
