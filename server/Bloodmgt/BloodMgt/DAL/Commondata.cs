namespace BloodMgt.DAL
{
    public static class Commondata
    {
        public static string useremail;
        public static int userid;

        public static void getdata(string email)
        {
            useremail = email;
        }
    }
}
