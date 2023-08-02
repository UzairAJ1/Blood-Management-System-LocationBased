using System.ComponentModel.DataAnnotations;

namespace BloodMgt.Models
{
    public class Donner
    {
       
            [Key]
            public int donnerid { get; set; }
            public string name { get; set; }
            public string cnic { get; set;}
            public string bloodgroup { get; set; }
            public string city { get; set; }
            public string address { get; set; }
            public string contactno { get; set; }
            public string email { get; set; }
            public decimal lat { get; set; }
           public decimal lan { get; set; }










    }
}
