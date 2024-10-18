export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "OuterHeaven",
  description: "V has come to.",
  navItems: [
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
      href: "/user/profile",
    },
    {
      label: "Dashboard",
      href: "/user/dashboard",
    },
    {
      label: "Projects",
      href: "/user/projects",
    },
    {
      label: "Team",
      href: "/user/team",
    },
    {
      label: "Calendar",
      href: "/user/calendar",
    },
    {
      label: "Settings",
      href: "/user/settings",
    },
    {
      label: "Help & Feedback",
      href: "/user/help-feedback",
    },
    {
      label: "Logout",
      href: "/user/logout",
    },
  ],
  navMenuAuthItems:[
    {
      label: "Sign In",
      href: "/user/login",
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
