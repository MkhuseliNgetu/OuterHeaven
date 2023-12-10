using Microsoft.AspNetCore.Mvc;

namespace OuterHeaven
{
    public class Payment : Controller
    {
        public static String[][] PaymentItem;
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult PaymentDetails(){


        }
    }
}