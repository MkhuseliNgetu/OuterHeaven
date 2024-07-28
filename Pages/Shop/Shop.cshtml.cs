using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Net;

namespace OuterHeaven.Pages
{
    public class ShopModel : PageModel
    {
        public Cookie MyExperience = new Cookie();
        public Cookie Sales = new Cookie();
        public string OngoingSale { get; set; }
        public void OnGet()
        {

            RememberMyExperience();
            MyExperience.Name = "UserExperience";
            MyExperience.Version = 1;
            MyExperience.Expires = DateTime.Now.AddMinutes(1);


            FindSale();
            //Alert User Of Sale
            Sales.Name = "CurrentSales";
            Sales.Value = OngoingSale;
            Sales.Version = 1;
            Sales.Expires = DateTime.Now.AddMinutes(2);
        }

        public void RememberMyExperience()
        {
            ViewData["UserExperience"] = MyExperience.Value;
        }

        public void FindSale()
        {
            OngoingSale = "50% off";
        }

        public IActionResult OnPostJackets()
        {

            return RedirectToPage("/Jackets/Jackets", new { MyExperience.Value });
        }
        public IActionResult OnPostCoatsAndHoodies()
        {
            return RedirectToPage("/CoatsHoodies/CoatsHoodies", new { MyExperience.Value });
        }
        public IActionResult OnPostTShirtsGolfShirts()
        {
            return RedirectToPage("/TShirtsGolfShirts/TShirtsGolfShirts", new { MyExperience.Value });
        }
        public IActionResult OnPostShirts()
        {
            return RedirectToPage("/Shirts/Shirts", new { MyExperience.Value });
        }
        public IActionResult OnPostTops()
        {
            return RedirectToPage("/Tops/Tops", new { MyExperience.Value });
        }
        public IActionResult OnPostDressesSkirts()
        {
            return RedirectToPage("/DressesSkirts/DressesSkirts", new { MyExperience.Value });
        }
        public IActionResult OnPostJumpsuits()
        {
            return RedirectToPage("/Jumpsuits/Jumpsuits", new { MyExperience.Value });
        }
        public IActionResult OnPostLeggings()
        {
            return RedirectToPage("/Leggings/Leggings", new { MyExperience.Value });
        }
        public IActionResult OnPostJeansChinos()
        {
            return RedirectToPage("/JeansChinos/JeansChinos", new { MyExperience.Value });
        }
        public IActionResult OnPostJoggersSweatPants()
        {
            return RedirectToPage("/JoggersSweatPants/JoggersSweatPants", new { MyExperience.Value });
        }
        public IActionResult OnPostSneakers()
        {
            return RedirectToPage("/Sneakers/Sneakers", new { MyExperience.Value });
        }
        public IActionResult OnPostBoots()
        {
            return RedirectToPage("/Boots/Boots", new { MyExperience.Value });
        }
        public IActionResult OnPostHeels()
        {
            return RedirectToPage("/Heels/Heels", new { MyExperience.Value });
        }
        public IActionResult OnPostPumps()
        {
            return RedirectToPage("/Pumps/Pumps", new { MyExperience.Value });
        }
        public IActionResult OnPostSunglasses()
        {
            return RedirectToPage("/Sunglasses/Sunglasses", new { MyExperience.Value });
        }
        public IActionResult OnPostWatches()
        {
            return RedirectToPage("/Watches/Watches", new { MyExperience.Value });
        }
        public IActionResult OnPostPerfume()
        {
            return RedirectToPage("/Perfume/Perfume", new { MyExperience.Value });
        }
        public IActionResult OnPostBandanas()
        {
            return RedirectToPage("/Bandanas/Bandanas", new { MyExperience.Value });
        }
        public IActionResult OnPostChains()
        {
            return RedirectToPage("/Chains/Chains", new { MyExperience.Value });
        }
        public IActionResult OnPostHats()
        {
            return RedirectToPage("/Hats/Hats", new { MyExperience.Value });
        }
        public IActionResult OnPostBelts()
        {
            return RedirectToPage("/Belts/Belts", new { MyExperience.Value });
        }
    }
}
