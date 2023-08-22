using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class ShopModel : PageModel
    {
        public string Experience { get; set; }

       
        public void OnGet()
        {
            if(ViewData.Count > 0)
            {
               
            }
        }


    }
}
