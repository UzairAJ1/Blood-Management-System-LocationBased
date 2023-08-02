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
    public class BloodstoresController : Controller
    {
        private readonly MyDbContext _context;

        public BloodstoresController(MyDbContext context)
        {
            _context = context;
        }

        // GET: Bloodstores
        public async Task<IActionResult> Index()
        {
              return _context.Bloodstores != null ? 
                          View(await _context.Bloodstores.ToListAsync()) :
                          Problem("Entity set 'MyDbContext.Bloodstores'  is null.");
        }

        // GET: Bloodstores/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Bloodstores == null)
            {
                return NotFound();
            }

            var bloodstore = await _context.Bloodstores
                .FirstOrDefaultAsync(m => m.bgid == id);
            if (bloodstore == null)
            {
                return NotFound();
            }

            return View(bloodstore);
        }

        // GET: Bloodstores/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Bloodstores/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("bgid,bloodgroup,unit,bloodbank")] Bloodstore bloodstore)
        {
            if (ModelState.IsValid)
            {
                _context.Add(bloodstore);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(bloodstore);
        }

        // GET: Bloodstores/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Bloodstores == null)
            {
                return NotFound();
            }

            var bloodstore = await _context.Bloodstores.FindAsync(id);
            if (bloodstore == null)
            {
                return NotFound();
            }
            return View(bloodstore);
        }

        // POST: Bloodstores/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("bgid,bloodgroup,unit,bloodbank")] Bloodstore bloodstore)
        {
            if (id != bloodstore.bgid)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(bloodstore);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!BloodstoreExists(bloodstore.bgid))
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
            return View(bloodstore);
        }

        // GET: Bloodstores/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Bloodstores == null)
            {
                return NotFound();
            }

            var bloodstore = await _context.Bloodstores
                .FirstOrDefaultAsync(m => m.bgid == id);
            if (bloodstore == null)
            {
                return NotFound();
            }

            return View(bloodstore);
        }

        // POST: Bloodstores/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Bloodstores == null)
            {
                return Problem("Entity set 'MyDbContext.Bloodstores'  is null.");
            }
            var bloodstore = await _context.Bloodstores.FindAsync(id);
            if (bloodstore != null)
            {
                _context.Bloodstores.Remove(bloodstore);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool BloodstoreExists(int id)
        {
          return (_context.Bloodstores?.Any(e => e.bgid == id)).GetValueOrDefault();
        }
    }
}
