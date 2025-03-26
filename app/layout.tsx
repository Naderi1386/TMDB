import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";

import { Inter } from "next/font/google";
const inter = Inter({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TMDB",
    template: "%s TMDB",
  },
  description: "The TMDB website is here for you to find the best ones",
};

interface RootLayoutPropsType {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutPropsType) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
