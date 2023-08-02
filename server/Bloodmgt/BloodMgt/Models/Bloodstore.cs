using System.ComponentModel.DataAnnotations;

namespace BloodMgt.Models

{
    public class Bloodstore
    {
        [Key]
        public int bgid { get; set; }
        public string bloodgroup { get; set; }
        public int unit { get; set; }

        public string bloodbank { get; set; }
    }
}
