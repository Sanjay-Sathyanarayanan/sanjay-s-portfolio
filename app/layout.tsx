import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanjay's Portfolio",
  icons: {
    icon: "/logo.svg",
  },
  description: "Welcome to my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-[#030014] overflow-y-scroll overflow-x-hidden `}> 
        <NavBar/>   
        {children}
        <Footer/>
        <Toaster position="top-center"/>
        <Analytics/>
        <SpeedInsights/>
        </body>
    </html>
  );
}
