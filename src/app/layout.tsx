import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Danpro Global LLC | Distribución Estratégica para Marketplaces",
  description: "Danpro Global LLC optimiza su cadena de suministro para escalar en el mercado estadounidense. Compras mayoristas, e-commerce y protección de marca MAP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="[PON_AQUI_TU_ID_DE_CRISP]";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
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
