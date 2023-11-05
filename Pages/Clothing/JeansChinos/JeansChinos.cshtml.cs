using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class JeansChinosModel : PageModel
    {

        public string UserExperience{ get; set; }
      
        public void OnGet()
        {
            UserExperience = "Default";
        }

    }
}