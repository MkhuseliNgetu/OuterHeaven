using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class BeltsModel : PageModel
    {
        private readonly ILogger<BeltsModel> _logger;
        public string Experience { get; set; }
      
        public BeltsModel(ILogger<BeltsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            Experience = "Default";
        }

    }
}