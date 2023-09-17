<<<<<<< Updated upstream
﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class BadanasModel: PageModel
    {
        private readonly ILogger<BadanasModel> _logger;
        public string Experience { get; set; }
      
        public BadanasModel(ILogger<BadanasModel> logger)
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
    public class BadanasModel: PageModel
    {
        private readonly ILogger<BadanasModel> _logger;
        public string Experience { get; set; }
      
        public BadanasModel(ILogger<BadanasModel> logger)
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