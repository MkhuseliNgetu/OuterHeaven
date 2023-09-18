using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        public string UserExperience { get; set; }
      
        public void OnGet()
        {
            UserExperience = "Default";

        }
        public IActionResult OnPost(string MaleExperienceButton, string FemaleExperienceButton)
        {
        
            if (FemaleExperienceButton == null)
            {

                if (MaleExperienceButton.Equals("Male"))
                {
  
                    UserExperience = "Male";
                }
                else
                {
                   
                    UserExperience = "N/A";
                }
            }

            if (MaleExperienceButton == null)
            {
                if (FemaleExperienceButton.Equals("Female") && FemaleExperienceButton != null)
                {
                    UserExperience = "Female";
                }
                else
                {
                    UserExperience = "N/A";
                   
                }

            }

            return RedirectToPage("Shop", new { this.UserExperience });
        }
    }
}