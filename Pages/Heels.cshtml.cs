using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class HeelsModel : PageModel
    {
        private readonly ILogger<HeelsModel> _logger;
        public string Experience { get; set; }
      
        public HeelsModel(ILogger<HeelsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            Experience = "Default";
        }

    }
}