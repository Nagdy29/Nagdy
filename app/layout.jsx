import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import PagesTransaction from "@/components/PagesTransaction";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nagdy",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}