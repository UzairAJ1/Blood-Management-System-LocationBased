using BloodMgt.DML;
using BloodMgt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BloodMgt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DonnerController : ControllerBase
    {

        private readonly MyDbContext _context;

        public DonnerController(MyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetDonnerList")]
        public async Task<IEnumerable<Donner>> GetDonnerList()
        {
            return await _context.Donners.ToListAsync();
        }
        [HttpPost]
        [Route("AddDonner")]
        public async Task<Donner> AddDonner(Donner obj)
        {
            Donner donner = new Donner();
            donner.name = obj.name;
            donner.email = obj.email;
            donner.address = obj.address;
            donner.city = obj.city;
            donner.cnic=obj.cnic;
            donner.bloodgroup = obj.bloodgroup;
            donner.contactno = obj.contactno;
            donner.lat = obj.lat;
            donner.lan = obj.lan;

            _context.Donners.Add(donner);
            await _context.SaveChangesAsync();
            return obj;
        }
        [HttpPost]
        [Route("AddLocation")]
        public async Task<Donnerlocation> AddLocation(Donnerlocation obj)
        {
            _context.donnerlocations.Add(obj);
            await _context.SaveChangesAsync();
            return obj;
        }
        [HttpGet]
        [Route("productList")]
        public async Task<IEnumerable<Products>> productList()
        {
            return await _context.products.ToListAsync();
        }

    }
}