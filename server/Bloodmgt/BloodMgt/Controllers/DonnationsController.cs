using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BloodMgt.DML;
using BloodMgt.Models;

namespace BloodMgt.Controllers
{
    public class DonnationsController : Controller
    {
        private readonly MyDbContext _context;

        public DonnationsController(MyDbContext context)
        {
            _context = context;
        }

        // GET: Donnations
        public async Task<IActionResult> Index()
        {
              return _context.Donnations != null ? 
                          View(await _context.Donnations.ToListAsync()) :
                          Problem("Entity set 'MyDbContext.Donnations'  is null.");
        }

        // GET: Donnations/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Donnations == null)
            {
                return NotFound();
            }

            var donnation = await _context.Donnations
                .FirstOrDefaultAsync(m => m.Id == id);
            if (donnation == null)
            {
                return NotFound();
            }

            return View(donnation);
        }

        // GET: Donnations/Create
        public IActionResult Create()
        {
            ViewBag.donnerid = GetDonnerList();
            ViewBag.bid = GetStoreList();
            ViewBag.bgvalue= GetStoreList();
            return View();
        }

        // POST: Donnations/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,donnerid,city,donationdate,bloodgroup,unit,bgid")] Donnation donnation)
        {
            Bloodstore bstore = new Bloodstore();
            if (ModelState.IsValid)
            {
                string parm = $"Bstore @id='{donnation.bgid}',@bgnit='{donnation.unit}'";
                var sunit=_context.Bloodstores.Where(s => s.bgid.Equals(donnation.bgid)&& s.bloodgroup.Equals(donnation.bloodgroup)).FirstOrDefault();
                
                _context.Add(donnation);

                await _context.SaveChangesAsync();
                var rowsAffected = _context.Database.ExecuteSqlRaw(parm);

                return RedirectToAction(nameof(Index));
            }
            return View(donnation);
        }

        // GET: Donnations/Edit/5



        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Donnations == null)
            {
                return NotFound();
            }

            var donnation = await _context.Donnations.FindAsync(id);
            if (donnation == null)
            {
                return NotFound();
            }
            return View(donnation);
        }

        // POST: Donnations/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,donnerid,city,donationdate,bg,unit,bgid")] Donnation donnation)
        {
            if (id != donnation.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    
                    _context.Update(donnation);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DonnationExists(donnation.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(donnation);
        }

        // GET: Donnations/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Donnations == null)
            {
                return NotFound();
            }

            var donnation = await _context.Donnations
                .FirstOrDefaultAsync(m => m.Id == id);
            if (donnation == null)
            {
                return NotFound();
            }

            return View(donnation);
        }

        // POST: Donnations/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Donnations == null)
            {
                return Problem("Entity set 'MyDbContext.Donnations'  is null.");
            }
            var donnation = await _context.Donnations.FindAsync(id);
            if (donnation != null)
            {
                _context.Donnations.Remove(donnation);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
        public List<SelectListItem> GetDonnerList()
        {
            var donerList = new List<SelectListItem>();
            List<Donner> DList = _context.Donners.ToList();
            donerList = DList.Select(u => new SelectListItem()
            {
                Value = u.donnerid.ToString(),
                Text = u.name,

            }).ToList();
            var def = new SelectListItem()
            {
                Value = "",
                Text = "--Select--------"
            };
            donerList.Insert(0, def);
            return donerList;
        }
        public List<SelectListItem> GetStoreList()
        {
           
            var BankList = new List<SelectListItem>();
            List<Bloodstore> SList = _context.Bloodstores.ToList();
            BankList = SList.Select(u => new SelectListItem()
            {
                Value = u.bgid.ToString(),
                Text = u.bloodgroup ,
            }).ToList();
            var def = new SelectListItem()
            {
                Value = "",
                Text = "--Select--------"
            };
            BankList.Insert(0, def);
            return BankList;
        }

        private bool DonnationExists(int id)
        {
          return (_context.Donnations?.Any(e => e.Id == id)).GetValueOrDefault();
        }
        public async Task<IActionResult> EditStore(int? id)
        {
            if (id == null || _context.Bloodstores == null)
            {
                return NotFound();
            }

            var bstore = await _context.Bloodstores.FindAsync(id);
            if (bstore == null)
            {
                return NotFound();
            }
            return View();
        }

    }
}
