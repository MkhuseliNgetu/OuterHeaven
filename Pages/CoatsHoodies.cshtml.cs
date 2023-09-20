using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using OuterHeaven.Models;

namespace OuterHeaven.Pages
{
    public class CoatsHoodiesModel : PageModel
    {

        public string UserExperience { get; set; }
      
        public void OnGet(string UserExperience)
        {
           UserExperience = "Default";
        }
        public void OnGetCoatsAndHoodies(string UserExperience)
        {

            this.UserExperience = UserExperience;
        }

    }
}