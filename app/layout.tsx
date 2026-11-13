import "./globals.css";
import { RootLayoutProps } from "./types";
import Navbar from "./components/Navbar";
import { Outfit } from "next/font/google";

const outfitFont = Outfit({
  subsets: ["latin", "latin-ext"],
  display: "swap"
})

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="hr">
      <body className={outfitFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}