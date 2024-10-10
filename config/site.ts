export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "OuterHeaven",
  description: "V has come to.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Accessories",
      href: "/accessories",
    },
    {
      label: "Clothing",
      href: "/clothing",
    },
    {
      label: "Footwear",
      href: "/footwear",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  navMenuAuthItems:[
    {
      label: "Sign In",
      href: "/login",
    }
  ],
  navMain:[
    {
      label: "Start Shopping",
      href: "/main",
    }
  ],
  links: {
   github: "https://github.com/MkhuseliNgetu",
   sponsor: "https://patreon.com/jrgarciadev",
   },
};
