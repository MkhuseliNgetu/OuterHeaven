using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Net;

namespace OuterHeaven.Pages
{
    public class IndexModel : PageModel
    {
        public Cookie Experience = new Cookie();
        ShopModel OpenStore = new ShopModel();

        public void OnGet()
        {
            Experience.Value = "Male";
        }
        public IActionResult OnPost(string MaleExperienceButton, string FemaleExperienceButton)
        {
            Experience.Domain = "http://localhost:44305";
            Experience.Name = "UserExperience";
            Experience.Version = 1;
            Experience.Expires = DateTime.Now.AddMinutes(30);

            if (FemaleExperienceButton == null)
            {

                if (MaleExperienceButton.Equals("Male"))
                {

                    Experience.Value = "Male";
                }
                else
                {

                    Experience.Value = "N/A";
                }
            }

            if (MaleExperienceButton == null)
            {
                if (FemaleExperienceButton.Equals("Female") || FemaleExperienceButton != null)
                {
                    Experience.Value = "Female";
                }
                else
                {
                    Experience.Value = "N/A";

                }

            }


            return RedirectToPage("/Shop/Shop", this.Experience.Value = OpenStore.MyExperience.Value);
            }
        }
    }