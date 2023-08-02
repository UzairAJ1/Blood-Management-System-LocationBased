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
    public class UserCommentsController : Controller
    {
        private readonly MyDbContext _context;

        public UserCommentsController(MyDbContext context)
        {
            _context = context;
        }

        // GET: UserComments
        public async Task<IActionResult> Index()
        {
              return _context.userComments != null ? 
                          View(await _context.userComments.ToListAsync()) :
                          Problem("Entity set 'MyDbContext.userComments'  is null.");
        }

        // GET: UserComments/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.userComments == null)
            {
                return NotFound();
            }

            var userComments = await _context.userComments
                .FirstOrDefaultAsync(m => m.commentsid == id);
            if (userComments == null)
            {
                return NotFound();
            }

            return View(userComments);
        }

        // GET: UserComments/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: UserComments/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("name,email,city,msg,postdate")] UserComments userComments)
        {
            if (ModelState.IsValid)
            {
                userComments.postdate = DateTime.Now;
                _context.Add(userComments);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(userComments);
        }

        // GET: UserComments/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.userComments == null)
            {
                return NotFound();
            }

            var userComments = await _context.userComments.FindAsync(id);
            if (userComments == null)
            {
                return NotFound();
            }
            return View(userComments);
        }

        // POST: UserComments/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("commentsid,name,email,city,msg,postdate")] UserComments userComments)
        {
            if (id != userComments.commentsid)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(userComments);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserCommentsExists(userComments.commentsid))
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
            return View(userComments);
        }

        // GET: UserComments/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.userComments == null)
            {
                return NotFound();
            }

            var userComments = await _context.userComments
                .FirstOrDefaultAsync(m => m.commentsid == id);
            if (userComments == null)
            {
                return NotFound();
            }

            return View(userComments);
        }

        // POST: UserComments/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.userComments == null)
            {
                return Problem("Entity set 'MyDbContext.userComments'  is null.");
            }
            var userComments = await _context.userComments.FindAsync(id);
            if (userComments != null)
            {
                _context.userComments.Remove(userComments);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool UserCommentsExists(int id)
        {
          return (_context.userComments?.Any(e => e.commentsid == id)).GetValueOrDefault();
        }
    }
}
