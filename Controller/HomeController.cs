using Microsoft.AspNetCore.Mvc;

namespace OuterHeaven
{
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Index(String SelectedExpierence)
        {
            if (SelectedExpierence.Equals("MaleExperience"))
            {


            }else if (SelectedExpierence.Equals("FemaleExperience"))
            {

            }
            return View();
        }
    }
}
