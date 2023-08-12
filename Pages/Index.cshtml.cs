using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
      
        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
          
        }
        public IActionResult OnPost(String MaleExperienceButton, String FemaleExperienceButton)
        {
            if (FemaleExperienceButton == null)
            {

                if (MaleExperienceButton.Equals("Male"))
                {
                    ViewData["Experience"] = "Male";

                }
                else
                {
                    ViewData["Experience"] = "N/A";
                }
            }

            if (MaleExperienceButton == null)
            {
                if (FemaleExperienceButton.Equals("Female") && FemaleExperienceButton != null)
                {
                    ViewData["Experience"] = "Female";
                }
                else
                {
                    ViewData["Experience"] = "N/A";
                }

            }

            return RedirectToPage("Shop");
        }
    }
}