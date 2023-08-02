using BloodMgt.DML;
using BloodMgt.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace BloodMgt.Controllers
{
    public class HomeController : Controller
    {
        private readonly MyDbContext _context;

        public HomeController(MyDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            ViewBag.Donners = _context.Donners.Count();
            ViewBag.Request = _context.Bloodrequests.Count();
            ViewBag.tran = _context.Transfusions.Count();
            ViewBag.donation = _context.Donnations.Count();


            //  ViewBag.Bp=_context.Bloodstores.Count(bp =>bp.bgid==1);
            var log = _context.Bloodstores.Where(x => x.bgid.Equals(6)).SingleOrDefault();
            ViewBag.Bp = log.unit;
            var log2 = _context.Bloodstores.Where(x => x.bgid.Equals(1)).SingleOrDefault();
            ViewBag.An = log2.unit;
            var log3 = _context.Bloodstores.Where(x => x.bgid.Equals(2)).SingleOrDefault();
            ViewBag.Ap = log3.unit;
            var log4 = _context.Bloodstores.Where(x => x.bgid.Equals(5)).SingleOrDefault();
            ViewBag.Abn = log4.unit;
            //var count = _context.Database.SqlQueryRaw($"SELECT COUNT(fieldName) FROM Blog").ToList();

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult Transfusions()
        {
            return View();
        }
        public IActionResult BloodBanks()
        {
            return View();
        }
        public IActionResult Login()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}