using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class ShopModel : PageModel
    {
        public string UserExperience { get; set; }

        public string OngoingSale {get; set;}
        public void OnGet(string UserExperience)
        {
            this.UserExperience = UserExperience;
            OngoingSale = "50% off";
          
        }
        public IActionResult OnPostJackets(){


             return RedirectToPage("Jackets", new {this.UserExperience});
        }
        public IActionResult OnPostCoatsAndHoodies()
        {

            return RedirectToPage("CoatsAndHoodies", new { this.UserExperience });
        }


    }
}
