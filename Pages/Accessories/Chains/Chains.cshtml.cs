using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class ChainsModel: PageModel
    {
        private readonly ILogger<ChainsModel> _logger;
        public string UserExperience { get; set; }
      
        public ChainsModel(ILogger<ChainsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            UserExperience = "Default";
        }

    }
}