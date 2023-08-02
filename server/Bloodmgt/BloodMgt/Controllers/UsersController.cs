using BloodMgt.DAL;
using BloodMgt.DML;
using BloodMgt.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BloodMgt.Controllers
{
    public class UsersController : Controller
    {
        private readonly MyDbContext _context;
        const string SessionName = "_Name";
        public UsersController(MyDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            HttpContext.Session.SetString("SessionName", "Jarvik");

            return View();
        }
     
        public IActionResult Dash()
        {
            return View("Dash");
        }
        public IActionResult Login()
        {
            return View();
        }
        [HttpPost]
        [Route("UserLogin")]
        public IActionResult UserLogin(Users obj)
        {
            Users user = new Users();
            var log = _context.users.Where(x => x.uemail.Equals(obj.uemail) && x.pass.Equals(obj.pass)).SingleOrDefault();
            if (log == null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });

            }
            else
            {

                user.uemail = obj.uemail;
                 
                Ok(new { status = 200, isSuccess = true, message = "User Login successfully", UserDetails = log });
                // HttpContext.Session.SetString(SessionName, obj.uemail);

                // ViewBag.email = HttpContext.Session.GetString(SessionName);
                // HttpContext.Session.SetString(SessionName);
                ViewBag.name = "ABCG";
                ViewBag.SessionName = HttpContext.Session.GetString("SessionName");
                Commondata.getdata(obj.uemail);

                return RedirectToAction("Dash");
            }

        }
         [HttpPost]
        [Route("Login")]
        public IActionResult Login(Users obj)
        {
            Users user = new Users();
            var log = _context.users.Where(x => x.uemail.Equals(obj.uemail) && x.pass.Equals(obj.pass)).SingleOrDefault();
            if (log == null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });

            }
            else
            {

                user.uemail = obj.uemail;

                Ok(new { status = 200, isSuccess = true, message = "User Login successfully", UserDetails = log });
                // HttpContext.Session.SetString(SessionName, obj.uemail);

                // ViewBag.email = HttpContext.Session.GetString(SessionName);
                // HttpContext.Session.SetString(SessionName);
                ViewBag.name = "ABCG";
                ViewBag.SessionName = HttpContext.Session.GetString("SessionName");
                Commondata.getdata(obj.uemail);

                return RedirectToAction("Dash");
            }

        }


    }


    }

