using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class LeggingsModel : PageModel
    {
        private readonly ILogger<LeggingsModel> _logger;
        public string Experience { get; set; }
      
        public LeggingsModel(ILogger<LeggingsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            Experience = "Default";
        }

    }
}