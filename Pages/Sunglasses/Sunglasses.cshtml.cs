using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class SunglassesModel : PageModel
    {
        private readonly ILogger<SunglassesModel> _logger;
        public string UserExperience { get; set; }
      
        public SunglassesModel(ILogger<SunglassesModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            UserExperience = "Default";
        }

    }
}