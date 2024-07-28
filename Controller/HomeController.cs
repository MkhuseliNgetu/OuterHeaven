using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven
{
    public class HomeController : PageModel
    {

        public string[][] CheckoutItem;
        public static Payment TransferMyItem;
        public static int BaseItemSize = 3;
        public static int ItemCount = 0;

        [HttpGet]
        public void OnGet()
        {
       
        }
        [HttpPost]
        public void OnPost() 
        { 
        
        
        }
      
        [HttpPost]
        public IActionResult AddToCart (string AddToCart, string ItemName, string ItemSize,string ItemPrice){
            TransferMyItem = new Payment();

            switch (AddToCart != null || AddToCart != ""){
            
                case true:
                    if(ItemName != null && ItemSize != null && ItemPrice != null){
                        CheckoutItem[0][0] = ItemName;
                        CheckoutItem[0][1] = ItemSize;
                        CheckoutItem[0][2] = ItemPrice;


                        for(int DC = 0; DC < BaseItemSize; DC++)
                        {
                            TransferMyItem.PaymentItem.SetValue(CheckoutItem[0][DC], DC);
                        }
                        ItemCount++;
                    }
                break;

                case false:
                    ViewData["EmptyReport"] = "This item is not in the cart";
                break;

            }
            return RedirectToAction("Index");
        }
        [HttpPost]
        /*[async]*/
        public IActionResult Wishlist(String Wishlist){
            
            if(Wishlist != "Wishlist This Item"){
           
            }
            return RedirectToAction("Index");
        }
    }
}
