using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using OuterHeaven.Pages;

namespace OuterHeaven.Pages
{
    public class JacketModel : PageModel
    {
        public string UserExperience { get; set; }

        public void OnGet(string UE)
        {
            this.UserExperience = UE;
        }

    }
}