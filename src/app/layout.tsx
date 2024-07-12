import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "app/components/Shared/Footer";
import { Header } from "app/components/Shared/Header";
import { montserrat, roboto_mono } from "./Fonts";


export default function RootLayout({children}: { children: React.ReactNode }) {


  return (

    <html lang="en" className={`${montserrat.variable} ${roboto_mono.variable}`}>
      <body >
        <Header />
        {children}
       <Footer />
      </body>
    </html>
  );
}
