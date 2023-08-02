using System.ComponentModel.DataAnnotations;

namespace BloodMgt.Models
{
    public class Bloodrequest
    {

        [Key]
        public int requstid { get; set; }
        public string name { get; set; }
        public string bloodgroup { get; set; }
        public string city { get; set; }
        public string address { get; set; }
        public string contactno { get; set; }
        public string email { get; set; }
      
        public int unit { get; set; }
        public int active { get; set; }
    }
}
