using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class PumpsModel : PageModel
    {
        private readonly ILogger<PumpsModel> _logger;
        public string Experience { get; set; }
      
        public PumpsModel(ILogger<PumpsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            Experience = "Default";
        }

    }
}