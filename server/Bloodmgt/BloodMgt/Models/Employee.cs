using System.ComponentModel.DataAnnotations;

namespace BloodMgt.Models
{
    public class Employee
    {
        [Key]
        public int empid { get; set; }
       
        public string name { get; set; }
        public string email { get; set; }
        public string pass { get; set; }





    }
}
