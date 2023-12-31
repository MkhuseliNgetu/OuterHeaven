using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class JoggersSweatpantsModel : PageModel
    {
        private readonly ILogger<JoggersSweatpantsModel> _logger;
        public string UserExperience { get; set; }
      
        public JoggersSweatpantsModel(ILogger<JoggersSweatpantsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            UserExperience = "Default";
        }

    }
}