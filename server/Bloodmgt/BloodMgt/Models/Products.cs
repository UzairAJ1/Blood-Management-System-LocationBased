using System.ComponentModel.DataAnnotations;

namespace BloodMgt.Models
{
    public class Products
    {
        [Key]
        public int productid { get; set; }
        public string name { get; set; }
        public int price { get; set; }
        public int quantity { get; set; }
        public int totalamount { get; set;}

    }
}
