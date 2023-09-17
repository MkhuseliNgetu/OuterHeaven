<<<<<<< Updated upstream
﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class JumpsuitsModel : PageModel
    {
        private readonly ILogger<JumpsuitsModel> _logger;
        public string Experience { get; set; }
      
        public JumpsuitsModel(ILogger<JumpsuitsModel> logger)
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
    public class JumpsuitsModel : PageModel
    {
        private readonly ILogger<JumpsuitsModel> _logger;
        public string Experience { get; set; }
      
        public JumpsuitsModel(ILogger<JumpsuitsModel> logger)
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