import type { Metadata } from "next";
import { Ubuntu, Geist_Mono } from "next/font/google";
import "./globals.css";
import Transition from "./_components/Transition";
import Header from "./_components/header";
import Menu from "./_components/menu";

const geistSans = Ubuntu({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: [ "300", "400", "500", "700"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Profile",
  description: "who I am",
  icons: "/profile.svg", 
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth overflow-x-hidden`}
      >
        <Transition>
          <Header />
          <Menu />
          {children}</Transition>
        
      </body>
    </html>
  );
}
