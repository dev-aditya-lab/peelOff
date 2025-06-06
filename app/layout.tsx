
import "./globals.css";
import { cn } from "@/lib/utils";
import MyNavbar from "./MyComponents/MyNavbar";
import FooterSection from "./MyComponents/Sections/FooterSection";

import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Peel Off",
  description: "Custom Sticker Store - Peel and Stick!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-white font-sans antialiased")}>
          <MyNavbar/>
          <Analytics/>
        {children}

        <FooterSection/>
      </body>
    </html>
  );
}
