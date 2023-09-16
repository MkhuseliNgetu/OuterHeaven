using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class BootsModel : PageModel
    {
        private readonly ILogger<BootsModel> _logger;
        public string Experience { get; set; }
      
        public BootsModel (ILogger<BootsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            Experience = "Default";
        }

    }
}