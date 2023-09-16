using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class JeansChinosModel : PageModel
    {

        public string Experience { get; set; }
      
        public void OnGet()
        {
            Experience = "Default";
        }

    }
}