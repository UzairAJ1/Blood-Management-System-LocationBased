using BloodMgt.DML;
using BloodMgt.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BloodMgt.Controllers
{
    public class DonnersController : Controller
    {
        private readonly MyDbContext _context;

        public DonnersController(MyDbContext context)
        {
            _context = context;
        }

        // GET: Donners
        public async Task<IActionResult> Index()
        {
              return _context.Donners != null ? 
                          View(await _context.Donners.ToListAsync()) :
                          Problem("Entity set 'MyDbContext.Donners'  is null.");
        }

        public IActionResult Donnerlist()
        {
            return Json(_context.Donners.ToList());
        }

        // GET: Donners/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Donners == null)
            {
                return NotFound();
            }

            var donner = await _context.Donners
                .FirstOrDefaultAsync(m => m.donnerid == id);
            if (donner == null)
            {
                return NotFound();
            }

            return View(donner);
        }

        // GET: Donners/Create
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        [Route("AddDonners")]
        public IActionResult AddDonners(Donner donner)
        {
            _context.Donners.Add(donner);
            _context.SaveChanges();
            return Json(donner);
        }

        // POST: Donners/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("donnerid,name,cnic,bloodgroup,city,address,contactno,email")] Donner donner)
        {
            if (ModelState.IsValid)
            {
                _context.Add(donner);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(donner);
        }

        // GET: Donners/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Donners == null)
            {
                return NotFound();
            }

            var donner = await _context.Donners.FindAsync(id);
            if (donner == null)
            {
                return NotFound();
            }
            return View(donner);
        }

        // POST: Donners/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("donnerid,name,cnic,bloodgroup,city,address,contactno,email,gender,age")] Donner donner)
        {
            if (id != donner.donnerid)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(donner);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DonnerExists(donner.donnerid))
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
            return View(donner);
        }

        // GET: Donners/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Donners == null)
            {
                return NotFound();
            }

            var donner = await _context.Donners
                .FirstOrDefaultAsync(m => m.donnerid == id);
            if (donner == null)
            {
                return NotFound();
            }

            return View(donner);
        }

        // POST: Donners/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Donners == null)
            {
                return Problem("Entity set 'MyDbContext.Donners'  is null.");
            }
            var donner = await _context.Donners.FindAsync(id);
            if (donner != null)
            {
                _context.Donners.Remove(donner);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool DonnerExists(int id)
        {
          return (_context.Donners?.Any(e => e.donnerid == id)).GetValueOrDefault();
        }
    }
}
