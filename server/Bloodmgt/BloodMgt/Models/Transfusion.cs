using System.ComponentModel.DataAnnotations;

namespace BloodMgt.Models
{
    public class Transfusion
    {
        [Key]
        public int Id { get; set; }
        public int patientid { get; set; }

        public int requstid { get; set; }
        public string city { get; set; }
        public DateTime transdate { get; set; }

        public int unit { get; set; }

        public int bgid { get; set; }
        public string bloodgroup { get; set; }


    }
}
