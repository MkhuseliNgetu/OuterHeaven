using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace OuterHeaven.Pages
{
    public class ShopModel : PageModel
    {
        public string UserExperience { get; set; }

        public string OngoingSale {get; set;}
        public void OnGet(string UE)
        {
            this.UserExperience = UE;
            OngoingSale = "50% off";
          
        }
        public IActionResult OnPostJackets(){

             return RedirectToPage("/Jackets/Jackets", new {UE = this.UserExperience});
        }
        public IActionResult OnPostCoatsAndHoodies()
        {
            return RedirectToPage("/CoatsHoodies/CoatsHoodies", new { this.UserExperience });
        }
        public IActionResult OnPostTShirtsGolfShirts()
        {
            return RedirectToPage("/TShirtsGolfShirts/TShirtsGolfShirts", new { this.UserExperience });
        }
        public IActionResult OnPostShirts()
        {
            return RedirectToPage("/Shirts/Shirts", new { this.UserExperience });
        }
        public IActionResult OnPostTops()
        {
            return RedirectToPage("/Tops/Tops", new { this.UserExperience });
        }
        public IActionResult OnPostDressesSkirts()
        {
            return RedirectToPage("/DressesSkirts/DressesSkirts", new { this.UserExperience });
        }
        public IActionResult OnPostJumpsuits()
        {
            return RedirectToPage("/Jumpsuits/Jumpsuits", new { this.UserExperience });
        }
        public IActionResult OnPostLeggings()
        {
            return RedirectToPage("/Leggings/Leggings", new { this.UserExperience });
        }
        public IActionResult OnPostJeansChinos()
        {
            return RedirectToPage("/JeansChinos/JeansChinos", new { this.UserExperience });
        }
        public IActionResult OnPostJoggersSweatPants()
        {
            return RedirectToPage("/JoggersSweatPants/JoggersSweatPants", new { this.UserExperience });
        }
        public IActionResult OnPostSneakers()
        {
            return RedirectToPage("/Sneakers/Sneakers", new { this.UserExperience });
        }
        public IActionResult OnPostBoots()
        {
            return RedirectToPage("/Boots/Boots", new { this.UserExperience });
        }
        public IActionResult OnPostHeels()
        {
            return RedirectToPage("/Heels/Heels", new { this.UserExperience });
        }
        public IActionResult OnPostPumps()
        {
            return RedirectToPage("/Pumps/Pumps", new { this.UserExperience });
        }
        public IActionResult OnPostSunglasses()
        {
            return RedirectToPage("/Sunglasses/Sunglasses", new { this.UserExperience });
        }
        public IActionResult OnPostWatches()
        {
            return RedirectToPage("/Watches/Watches", new { this.UserExperience });
        }
         public IActionResult OnPostPerfume()
        {
            return RedirectToPage("/Perfume/Perfume", new { this.UserExperience });
        }
         public IActionResult OnPostBandanas()
        {
            return RedirectToPage("/Bandanas/Bandanas", new { this.UserExperience });
        }
         public IActionResult OnPostChains()
        {
            return RedirectToPage("/Chains/Chains", new { this.UserExperience });
        }
          public IActionResult OnPostHats()
        {
            return RedirectToPage("/Hats/Hats", new { this.UserExperience });
        }
          public IActionResult OnPostBelts()
        {
            return RedirectToPage("/Belts/Belts", new { this.UserExperience });
        }

    }
}
