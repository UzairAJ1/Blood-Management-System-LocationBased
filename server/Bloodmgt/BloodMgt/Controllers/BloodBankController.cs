using BloodMgt.DML;
using Microsoft.AspNetCore.Mvc;

namespace BloodMgt.Controllers
{
    public class BloodBankController : Controller
    {
        private readonly MyDbContext _dbContext;

        public BloodBankController(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IActionResult Index()
        {
            return View(_dbContext.Bloodbanks.ToList());
        }
    }
}
