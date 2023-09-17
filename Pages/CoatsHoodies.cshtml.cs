<<<<<<< Updated upstream
﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using OuterHeaven.Models;

namespace OuterHeaven.Pages
{
    public class CoatsHoodiesModel : PageModel
    {

        public string Experience { get; set; }
      
        public void OnGet()
        {
            Experience = "Default";
        }

    }
=======
﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using OuterHeaven.Models;

namespace OuterHeaven.Pages
{
    public class CoatsHoodiesModel : PageModel
    {

        public string Experience { get; set; }
      
        public void OnGet()
        {
            Experience = "Default";
        }

    }
>>>>>>> Stashed changes
}