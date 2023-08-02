using System.ComponentModel.DataAnnotations;

namespace BloodMgt.Models
{
    public class Patient
    {

        [Key]
        public int patientid { get; set; }
        public string name { get; set; }
        public string bloodgroup { get; set; }
        public string city { get; set; }
        public string address { get; set; }
        public string contactno { get; set; }
        public string email { get; set; }
        public string gender { get; set; }
        public int age { get; set; }

        public string reason { get; set; }
        public string detail { get; set; }

    }
}
