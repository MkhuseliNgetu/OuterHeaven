using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;


namespace OuterHeaven
{
    public class Payment : PageModel
    {

        public static int ArraySize;
        public static int ArrayLength;
        public static int ItemCount;
        public string[][] PaymentItem;
        private Dictionary<string, string[]> Crds = new Dictionary<string, string[]>();
        [HttpGet]
        public void OnGet()
        {
        
        }
        [HttpPost]
        public void OnPost()
        {

            
        }
        [HttpPost]
        public IActionResult Checkout(int ItemCount, string[][] PaymentItem)
        {
            

            return RedirectToAction("Index");
        }
        [HttpPost]
        public IActionResult PaymentDetails(int CardNo, int CardMon, int CardYr, int CVV, int CardNickName, int CardUserName){

            if (CardNo != null)
            {
                

            }
            return RedirectToAction("Index");
        }
    }
}