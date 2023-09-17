<<<<<<< Updated upstream
﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class ShirtsModel : PageModel
    {
        private readonly ILogger<ShirtsModel> _logger;
        public string Experience { get; set; }
      
        public ShirtsModel(ILogger<ShirtsModel> logger)
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
    public class ShirtsModel : PageModel
    {
        private readonly ILogger<ShirtsModel> _logger;
        public string Experience { get; set; }
      
        public ShirtsModel(ILogger<ShirtsModel> logger)
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