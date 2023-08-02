namespace BloodMgt.Models
{
    public class Donnation
    {
        public int Id { get; set; }
        public int donnerid { get; set; }
        public string city { get; set; }
        public DateTime donationdate { get; set; }
        public string bloodgroup { get; set; }

        public int unit { get; set; }

        public int bgid { get; set; }


    }
}
