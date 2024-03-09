import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Provider from "@/components/provider";
import { SkeletonTheme } from "react-loading-skeleton";




export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
    
      <body className="dark:bg-gray-900 bg-white">
        
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <Provider>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer />
        </Provider>
      </SkeletonTheme>
        </body>
      
    </html>
   
  );
}
