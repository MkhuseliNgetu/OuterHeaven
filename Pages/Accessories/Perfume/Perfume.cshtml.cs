using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class PerfumeModel : PageModel
    {
        private readonly ILogger<PerfumeModel> _logger;
        public string UserExperience { get; set; }
      
        public PerfumeModel(ILogger<PerfumeModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            UserExperience = "Default";
        }

    }
}