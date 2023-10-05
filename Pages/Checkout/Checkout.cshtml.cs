using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using OuterHeaven.Models;

namespace OuterHeaven.Pages
{
    public class CheckoutModel : PageModel
    {
        public string ItemName { get; set; }

        public string ItemPrice { get; set; }

        public string SetQuantity { get; set; }

        public string ItemSubtotal { get; set; }

        public string AllItemsSubtotalNoVat { get; set; }

        public string AllItemsVat { get; set; }

        public string AllItemsTotalWithVat { get; set; }

        private double ValueAddedTax = 15.00;

        public string UserExperience { get; set; }

        public ProductDatabase Products;
        public void OnGet()
        {
            UserExperience = "Default";
            Products = new ProductDatabase();
           
        }
    }
}
