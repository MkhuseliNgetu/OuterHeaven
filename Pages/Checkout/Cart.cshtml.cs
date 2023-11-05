using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class CartModel: PageModel
    {
        private readonly ILogger<CartModel> _logger;
        public string UserExperience { get; set; }
      
        public CartModel(ILogger<CartModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
           UserExperience = "Default";
        }

    }
}