using System.ComponentModel.DataAnnotations;

namespace BloodMgt.Models
{
    public class Bloodtransfustion
    {
        [Key]
        public int Id { get; set; }
        public int patientid { get; set; }
        public int requstid { get; set; }

        public string bloodgroup { get; set; }

        public string reason { get; set; }
        public DateTime transdate { get; set; }
        public int unit { get; set; }



    }
}
