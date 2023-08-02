using BloodMgt.DML;
using BloodMgt.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Web;
namespace BloodMgt.Controllers
{
    public class DonnerlocController : Controller
    {
        private readonly MyDbContext _context;
        public DonnerlocController(MyDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            string markers = "[";
            //Data Source = (LocalDB)\MSSQLLocalDB; AttachDbFilename =  Integrated Security = True
            DataTable dt = new DataTable();
            string conString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=D:\Bloodmgt\BloodMgt\DAL\itqaservice.mdf;Integrated Security=True";

            SqlCommand cmd = new SqlCommand("SELECT * FROM Donners");

            using (SqlConnection con = new SqlConnection(conString))
            {
                cmd.Connection = con;
                con.Open();
                using (SqlDataReader sdr = cmd.ExecuteReader())
                {
                    {
                        while (sdr.Read())
                        {
                            markers += "{";
                            markers += string.Format("'title': '{0}',", sdr["city"]);
                            markers += string.Format("'lat': '{0}',", sdr["lat"]);
                            markers += string.Format("'lng': '{0}',", sdr["lan"]);
                            markers += string.Format("'bg': '{0}'", sdr["bloodgroup"]);
                            markers += "},";
                        }
                    }
                    con.Close();
                }

                markers += "];";
                ViewBag.Markers = markers;
                return View();
            }
        }
        public IActionResult MapView()
        {
            string markers = "[";
            //Data Source = (LocalDB)\MSSQLLocalDB; AttachDbFilename =  Integrated Security = True
            DataTable dt = new DataTable();
            string conString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=D:\Bloodmgt\BloodMgt\DAL\itqaservice.mdf;Integrated Security=True";

            SqlCommand cmd = new SqlCommand("SELECT * FROM Donners");

            using (SqlConnection con = new SqlConnection(conString))
            {
                cmd.Connection = con;
                con.Open();
                using (SqlDataReader sdr = cmd.ExecuteReader())
                {
                    {
                        while (sdr.Read())
                        {
                            markers += "{";
                            markers += string.Format("'title': '{0}',", sdr["city"]);
                            markers += string.Format("'lat': '{0}',", sdr["lat"]);
                            markers += string.Format("'lng': '{0}',", sdr["lan"]);
                            markers += string.Format("'bg': '{0}'", sdr["bloodgroup"]);
                            markers += "},";
                        }
                    }
                    con.Close();
                }

                markers += "];";
                ViewBag.Markers = markers;
                return View();
            }
        }
        public IActionResult Create()
        {
            return View();


        }

        [HttpPost]
        public IActionResult Donnerlocation(Donnerlocation donnerlocation)
        {
            Donnerlocation dl = new Donnerlocation();
            dl.bg = donnerlocation.bg;
            dl.city = donnerlocation.city;
            dl.latitude = donnerlocation.latitude;
            dl.longitude = donnerlocation.longitude;
            dl.donnerid = donnerlocation.donnerid;
            dl.contactno = donnerlocation.contactno;
            dl.bg = donnerlocation.bg + dl.contactno;
            _context.Add(dl);
            _context.SaveChanges();
            return RedirectToAction(nameof(Index));
        }
        public IActionResult findBlood()
        {
            return View();
        }
        [HttpPost]
        public IActionResult findBloodList(string bg)
        {
            string markers = "[";
            //Data Source = (LocalDB)\MSSQLLocalDB; AttachDbFilename =  Integrated Security = True
            DataTable dt = new DataTable();
            string conString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=D:\Bloodmgt\BloodMgt\DAL\itqaservice.mdf;Integrated Security=True";

            SqlCommand cmd = new SqlCommand("SELECT * FROM Donners where bloodgroup ='"+bg+"'");

            using (SqlConnection con = new SqlConnection(conString))
            {
                cmd.Connection = con;
                con.Open();
                using (SqlDataReader sdr = cmd.ExecuteReader())
                {
                    {
                        while (sdr.Read())
                        {
                            markers += "{";
                            markers += string.Format("'title': '{0}',", sdr["city"]);
                            markers += string.Format("'lat': '{0}',", sdr["lat"]);
                            markers += string.Format("'lng': '{0}',", sdr["lan"]);
                            markers += string.Format("'bg': '{0}'", sdr["bloodgroup"]);
                            markers += "},";
                        }
                    }
                    con.Close();
                }

                markers += "];";
                ViewBag.Markers = markers;
                var log = _context.Donners.Where(x => x.bloodgroup.Equals(bg)).Count();
                ViewBag.blood = log;
                return View();
            }

            
        }
    }
}
    

