using System.ComponentModel.DataAnnotations;

namespace BloodMgt.Models
{
    public class Users
    {
        [Key]
        public string mobile { get; set; }

        public int userid { get; set; }
        public string uname { get; set; }
        public string uemail { get; set; }
        public string pass { get; set; }

    }
}
