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
    public class BloodrequestsController : Controller
    {
        private readonly MyDbContext _context;

        public BloodrequestsController(MyDbContext context)
        {
            _context = context;
        }

        // GET: Bloodrequests
        public async Task<IActionResult> Index()
        {
              return _context.Bloodrequests != null ? 
                          View(await _context.Bloodrequests.ToListAsync()) :
                          Problem("Entity set 'MyDbContext.Bloodrequests'  is null.");
        }

        // GET: Bloodrequests/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Bloodrequests == null)
            {
                return NotFound();
            }

            var bloodrequest = await _context.Bloodrequests
                .FirstOrDefaultAsync(m => m.requstid == id);
            if (bloodrequest == null)
            {
                return NotFound();
            }

            return View(bloodrequest);
        }

        // GET: Bloodrequests/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Bloodrequests/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("requstid,name,bloodgroup,city,address,contactno,email,unit,active")] Bloodrequest bloodrequest)
        {
            if (ModelState.IsValid)
            {
                bloodrequest.active = 1;
                _context.Add(bloodrequest);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(bloodrequest);
        }

        // GET: Bloodrequests/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Bloodrequests == null)
            {
                return NotFound();
            }

            var bloodrequest = await _context.Bloodrequests.FindAsync(id);
            if (bloodrequest == null)
            {
                return NotFound();
            }
            return View(bloodrequest);
        }

        // POST: Bloodrequests/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("requstid,name,bloodgroup,city,address,contactno,email,unit,active")] Bloodrequest bloodrequest)
        {
            if (id != bloodrequest.requstid)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(bloodrequest);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!BloodrequestExists(bloodrequest.requstid))
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
            return View(bloodrequest);
        }

        // GET: Bloodrequests/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Bloodrequests == null)
            {
                return NotFound();
            }

            var bloodrequest = await _context.Bloodrequests
                .FirstOrDefaultAsync(m => m.requstid == id);
            if (bloodrequest == null)
            {
                return NotFound();
            }

            return View(bloodrequest);
        }

        // POST: Bloodrequests/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Bloodrequests == null)
            {
                return Problem("Entity set 'MyDbContext.Bloodrequests'  is null.");
            }
            var bloodrequest = await _context.Bloodrequests.FindAsync(id);
            if (bloodrequest != null)
            {
                _context.Bloodrequests.Remove(bloodrequest);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool BloodrequestExists(int id)
        {
          return (_context.Bloodrequests?.Any(e => e.requstid == id)).GetValueOrDefault();
        }
    }
}
