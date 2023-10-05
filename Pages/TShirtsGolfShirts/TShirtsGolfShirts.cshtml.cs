using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class TShirtsGolfShirtsModel : PageModel
    {
        private readonly ILogger<TShirtsGolfShirtsModel> _logger;
        public string UserExperience { get; set; }
      
        public TShirtsGolfShirtsModel(ILogger<TShirtsGolfShirtsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            UserExperience = "Default";
        }

    }
}