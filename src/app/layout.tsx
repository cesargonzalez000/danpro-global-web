import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Danpro Global LLC | Strategic Distribution for Marketplaces",
  description: "Danpro Global LLC optimizes your supply chain to scale in the U.S. market. Wholesale purchasing, e-commerce, and MAP brand protection.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 767px) {
              html .crisp-client {
                bottom: 80px !important;
                margin-bottom: 80px !important;
                z-index: 999999 !important;
              }
              /* Ensure the MobileNav does not block touch events above its visual area */
              #mobile-nav-container {
                pointer-events: none;
              }
              #mobile-nav-container > * {
                pointer-events: auto;
              }
            }
          `
        }} />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="de8d5aad-587d-4923-8ba2-9207e47fd75a";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
