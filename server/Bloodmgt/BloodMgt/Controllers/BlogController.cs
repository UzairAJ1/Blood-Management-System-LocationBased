using BloodMgt.DML;
using BloodMgt.Models;
using Microsoft.AspNetCore.Mvc;

namespace BloodMgt.Controllers
{
    public class BlogController : Controller
    {
        private readonly MyDbContext _context;

        public BlogController(MyDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View(_context.News.ToList());
        }
        public IActionResult Create()
        {
           
            return View();
        }
        [HttpPost]
        public IActionResult NewsCreator(News news)
        {
            
            news.postdate = DateTime.Now;
            _context.News.Add(news);
            _context.SaveChanges();
           
            return View();
        }

        
    }
}
