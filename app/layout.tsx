import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";

import { Inter } from "next/font/google";
import { Shrikhand } from "next/font/google";

import Header from "./_components/Header";
import Footer from "./_components/Footer";
import ScrollButton from "./_components/ScrollButton";
const inter = Inter({
  display: "swap",
  subsets: ["latin"],
});
export const shrikhand=Shrikhand({
  display:"swap",
  subsets:['latin'],
  weight:"400"
})

export const metadata: Metadata = {
  title: {
    default: "TMDB",
    template: "%s (TMDB)",
  },
  description:
    "The TMDB website is here for you to find the best ones in the world",
};

interface RootLayoutPropsType {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutPropsType) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col h-dvh overflow-x-hidden`}>
        <Header />
        <main className="grow bg-white">{children}</main>
        <Footer />
        <ScrollButton />
      </body>
    </html>
  );
}
