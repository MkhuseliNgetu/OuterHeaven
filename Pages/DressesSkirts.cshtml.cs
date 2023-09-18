using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class DressesSkirtsModel : PageModel
    {
        private readonly ILogger<DressesSkirtsModel> _logger;
        public string Experience { get; set; }
      
        public DressesSkirtsModel(ILogger<DressesSkirtsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            Experience = "Default";
        }

    }
}