using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class PaymentModel: PageModel
    {
        private readonly ILogger<PaymentModel> _logger;
        public string UserExperience { get; set; }
      
        public PaymentModel(ILogger<PaymentModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
           UserExperience = "Default";
        }

    }
}