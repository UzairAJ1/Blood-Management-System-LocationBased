using System.ComponentModel;
using System.Runtime.InteropServices;

namespace BloodMgt.Models
{
    public class Donnerlocation
    {
        public int id { get; set; }
        public int donnerid { get; set; }
        public float latitude { get; set; }
        public float longitude { get; set; }
        
         public string contactno { get; set; }

        public string bg { get; set; }
        public string city { get; set; }

    }
}
