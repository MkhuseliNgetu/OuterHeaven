using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class HatsModel : PageModel
    {
        private readonly ILogger<HatsModel> _logger;
        public string UserExperience { get; set; }
      
        public HatsModel(ILogger<HatsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            UserExperience = "Default";
        }

    }
}