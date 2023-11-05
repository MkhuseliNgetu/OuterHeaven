using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class WatchesModel : PageModel
    {
        private readonly ILogger<WatchesModel> _logger;
        public string UserExperience { get; set; }
      
        public WatchesModel(ILogger<WatchesModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            UserExperience = "Default";
        }

    }
}