using BloodMgt.DML;
using BloodMgt.Models;
using Humanizer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BloodMgt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly MyDbContext _context;

        public NewsController(MyDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("GetNews")]
        public async Task<IEnumerable<News>> GetNews()
        {
            return await _context.News.Where(p => p.city == "Wah").ToListAsync();

        }
        [HttpGet]
        [Route("GetNews2")]
        public async Task<IEnumerable<News>> GetNews2()
        {
            return await _context.News.Where(p => p.city == "Taxila").ToListAsync();

        }
        [HttpPost]
        [Route("BlogRemarks")]
        public async Task<UserComments> BlogRemarks(UserComments obj)
        {
            obj.postdate = DateTime.Now;
            _context.userComments.Add(obj);
            await _context.SaveChangesAsync();
            return obj;
        }
        [HttpGet]
        [Route("GetRemarks")]
        public async Task<IEnumerable<UserComments>> GetRemarks()
        {
            return await _context.userComments.ToListAsync();

        }

    }
}
