using BloodMgt.DML;
using BloodMgt.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace BloodMgt.Controllers
{
    public class TransController : Controller
    {
        private readonly MyDbContext _context;

        public TransController(MyDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View(_context.Transfusions.ToList());
        }
        public IActionResult getStatus()
        {
            return Json(_context.Transfusions.ToList());
        }
            
        public IActionResult Create()
        {
            ViewBag.bid = GetStoreList();
            ViewBag.reqid = GetRequstList();
            ViewBag.patientid = GetpatientList();
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Transfusion transfusion)
        {
            Bloodrequest bloodrequest = new Bloodrequest();
            string parm1 = $"ReqStaus @id='{transfusion.requstid}',@pid='{transfusion.patientid}',@bgnit='{transfusion.unit}',@bg='{transfusion.bloodgroup}'";

            string parm = $"Bstoreout @id='{transfusion.bgid}',@bgnit='{transfusion.unit}'";
            var sunit = _context.Bloodstores.Where(s => s.bgid.Equals(transfusion.bgid) && s.bloodgroup.Equals(transfusion.bloodgroup)).FirstOrDefault();
            if (ModelState.IsValid)
            {
                _context.Add(transfusion);
                 _context.SaveChanges();
                var rowsAffected = _context.Database.ExecuteSqlRaw(parm);
                var rowsAffected1 = _context.Database.ExecuteSqlRaw(parm1);

                return RedirectToAction(nameof(Index));
            }
            return View(transfusion);
        }
        public List<SelectListItem> GetpatientList()
        {

            var ReqList = new List<SelectListItem>();
            List<Patient> SList = _context.Patients.ToList();
            ReqList = SList.Select(u => new SelectListItem()
            {
                Value = u.patientid.ToString(),
                Text = u.name,
            }).ToList();
            var def = new SelectListItem()
            {
                Value = "",
                Text = "--Select--------"
            };
            ReqList.Insert(0, def);
            return ReqList;
        }
        public List<SelectListItem> GetRequstList()
        {

            var ReqList = new List<SelectListItem>();
            List<Bloodrequest> SList = _context.Bloodrequests.ToList();
            ReqList = SList.Select(u => new SelectListItem()
            {
                Value = u.requstid.ToString(),
                Text = u.name,
            }).ToList();
            var def = new SelectListItem()
            {
                Value = "",
                Text = "--Select--------"
            };
            ReqList.Insert(0, def);
            return ReqList;
        }
        public List<SelectListItem> GetStoreList()
        {

            var BankList = new List<SelectListItem>();
            List<Bloodstore> SList = _context.Bloodstores.ToList();
            BankList = SList.Select(u => new SelectListItem()
            {
                Value = u.bgid.ToString(),
                Text = u.bloodgroup,
            }).ToList();
            var def = new SelectListItem()
            {
                Value = "",
                Text = "--Select--------"
            };
            BankList.Insert(0, def);
            return BankList;
        }
    }
}
