using BloodMgt.Models;
using Microsoft.EntityFrameworkCore;

namespace BloodMgt.DML
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<UserComments> userComments { get; set; }

        public DbSet<News> News { get; set; }
        
        public DbSet<Donner> Donners { get; set; }
        public DbSet<Products> products { get; set; }

        public DbSet<Donnerlocation> donnerlocations { get; set; }

        public DbSet<Employee> Employee { get; set; }
          public DbSet<Bloodrequest> Bloodrequests { get; set; }
          public DbSet<Bloodbank> Bloodbanks { get; set; }
          public DbSet<Donnation> Donnations { get; set; }
          public DbSet<Bloodstore> Bloodstores { get; set; }

        public DbSet<Users> users { get; set; }

        public DbSet<Patient> Patients { get; set; } = default!;

        public DbSet<Transfusion> Transfusions { get; set; } = default!;







    }
}
