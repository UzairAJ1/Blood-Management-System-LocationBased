using System.ComponentModel.DataAnnotations;

namespace BloodMgt.Models
{
    public class Bloodbank
    {
        [Key]
        public int bid { get; set; }
        public string name { get; set; }
        public string city { get; set; }
        public int ap { get; set; }
        public int an { get; set; }

        public int bp { get; set; }
        public int bn { get; set; }
        public int abp { get; set; }
        public int abn { get; set; }
        public int op { get; set; }
        public int on { get; set; }


    }
}
