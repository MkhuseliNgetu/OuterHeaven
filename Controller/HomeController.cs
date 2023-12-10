using Microsoft.AspNetCore.Mvc;

namespace OuterHeaven
{
    public class HomeController : Controller
    {
        public String[][] CheckoutItem;
        public static Payment TransferMyItem;
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Index(String SelectedExpierence)
        {
            if (SelectedExpierence.Equals("MaleExperience"))
            {


            }else if (SelectedExpierence.Equals("FemaleExperience"))
            {

            }
            return View();
        }
        [HttpPost]
        /*[async]*/
        public IActionResult AddToCart (String AddToCard, String ItemName, String ItemSize,String ItemPrice){
            TransferMyItem = new Payment();

            switch (AddToCard != null || AddToCard != ""){
            
                case true:
                    if(ItemName != null && ItemSize != null && ItemPrice != null){
                        String[][] CheckoutItem = {{ItemName, ItemSize, ItemPrice}};

                        TransferMyItem.PaymentItem = CheckoutItem[0][1];

                        if(TransferMyItem.element[0][1] != null){
                            
                        }
                    }
                break;

                case false:
                    Model["EmptyReport"] = "This item is not in the cart";
                break;

            }
            
        }
        [HttpPost]
        /*[async]*/
        public IActionResult Wishlist(String Wishlist){
            
            if(Wishlist != "Wishlist This Item"){
           
            }
        }
    }
}
