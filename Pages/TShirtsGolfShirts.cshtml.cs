<<<<<<< Updated upstream
﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class TShirtsGolfShirtsModel : PageModel
    {
        private readonly ILogger<TShirtsGolfShirtsModel> _logger;
        public string Experience { get; set; }
      
        public TShirtsGolfShirtsModel(ILogger<TShirtsGolfShirtsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            Experience = "Default";
        }

    }
=======
﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class TShirtsGolfShirtsModel : PageModel
    {
        private readonly ILogger<TShirtsGolfShirtsModel> _logger;
        public string Experience { get; set; }
      
        public TShirtsGolfShirtsModel(ILogger<TShirtsGolfShirtsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            Experience = "Default";
        }

    }
>>>>>>> Stashed changes
}