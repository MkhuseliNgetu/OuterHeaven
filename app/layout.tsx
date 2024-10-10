import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

import { Button, ButtonGroup } from "@nextui-org/button";
import { Disc3, ShoppingBag, SunSnow, VenetianMask } from "lucide-react";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
                {/* <ButtonGroup>
                  <Button size="lg" color="primary" endContent={ <ShoppingBag />}>
                    <span>Start Shopping</span>
                  </Button>
                  <Button size="lg" color="warning" endContent={ <VenetianMask />}>
                    <span>Set The Tone</span>
                  </Button>
                </ButtonGroup>
                
                <ButtonGroup>
                  <Button size="lg" color="success" endContent={ <Disc3 />}>
                    <span>Shop By Playlist</span>
                  </Button>
                  <Button size="lg" color="danger" endContent={ <SunSnow />}>
                    <span>Shop By Season</span>
                  </Button>
                </ButtonGroup>
                 */}
         
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
