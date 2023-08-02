using System.ComponentModel.DataAnnotations;

namespace BloodMgt.Models
{
    public class UserComments
    {
        [Key]
        public int commentsid { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string city { get; set; }

        public string msg { get; set; }
        public DateTime postdate { get; set; }
    }
}
