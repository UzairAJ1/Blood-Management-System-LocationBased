using System.ComponentModel.DataAnnotations;

namespace BloodMgt.Models
{
    public class News
    {
        [Key]
        public int newsid { get; set; }
        public string title { get; set; }
        public string city { get; set; }

        public string msg { get; set; }
        public DateTime postdate { get; set; }  
    }
}
