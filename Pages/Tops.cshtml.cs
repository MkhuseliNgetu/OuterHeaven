<<<<<<< Updated upstream
﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class TopsModel : PageModel
    {
        private readonly ILogger<TopsModel> _logger;
        public string Experience { get; set; }
      
        public TopsModel(ILogger<TopsModel> logger)
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
    public class TopsModel : PageModel
    {
        private readonly ILogger<TopsModel> _logger;
        public string Experience { get; set; }
      
        public TopsModel(ILogger<TopsModel> logger)
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