<<<<<<< Updated upstream
﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class SneakersModel : PageModel
    {
        private readonly ILogger<SneakersModel> _logger;
        public string Experience { get; set; }
      
        public SneakersModel(ILogger<SneakersModel> logger)
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
    public class SneakersModel : PageModel
    {
        private readonly ILogger<SneakersModel> _logger;
        public string Experience { get; set; }
      
        public SneakersModel(ILogger<SneakersModel> logger)
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