using BloodMgt.DML;
using BloodMgt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace BloodMgt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequesterController : ControllerBase
    {
       
        private readonly MyDbContext _context;

        public RequesterController(MyDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("GetRequesterList")]
        public async Task<IEnumerable<Bloodrequest>> GetRequesterList()
        {
            return await _context.Bloodrequests.ToListAsync();
        }
        [HttpPost]
        [Route("AddRequest")]
        public async Task<Bloodrequest> AddRequest(Bloodrequest obj)
        {
            obj.active = 1;
            _context.Bloodrequests.Add(obj);
            await _context.SaveChangesAsync();
            return obj;
        }

    }
}
