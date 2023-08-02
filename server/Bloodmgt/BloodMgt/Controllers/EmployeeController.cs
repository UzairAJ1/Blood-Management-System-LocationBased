using BloodMgt.DML;
using BloodMgt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Plugins;

namespace BloodMgt.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class EmployeeController : ControllerBase
    {
        private readonly MyDbContext _db;

        public EmployeeController(MyDbContext db)
        {
            _db = db;
        }
        [Route("Login")]
        [HttpPost]
        public ActionResult employeeLogin(Employee login)
        {
            var log = _db.Employee.Where(x => x.email.Equals(login.email) && x.pass.Equals(login.pass)).FirstOrDefault();

            if (log == null)
            {
                return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });
            }
            else

                return Ok(new { status = 200, isSuccess = true, message = "User Login successfully", UserDetails = log });
        }
    }
}
