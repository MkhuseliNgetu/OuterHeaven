using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using OuterHeaven.Pages;

namespace OuterHeaven.Pages
{
    public class JacketModel : PageModel
    {
        public string UserExperience { get; set; }

        public void OnGet(string UserExperience)
        {
            this.UserExperience = UserExperience;
        }
        public void OnGetJackets(string UserExperience){

            this.UserExperience = UserExperience;
        }

    }
}