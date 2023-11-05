using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class BandanasModel: PageModel
    {
        private readonly ILogger<BandanasModel> _logger;
        public string UserExperience { get; set; }
      
        public BandanasModel(ILogger<BandanasModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
           UserExperience = "Default";
        }

    }
}