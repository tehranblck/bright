"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          <div className="min-h-screen">{children}</div>
          <GoogleTagManager gtmId="GTM-NBR3MDZJ" />
          <Footer />
          {/* <ScrollToTop /> */}
          <WhatsAppMessage />
          {/* <Card/> */}
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import WhatsAppMessage from "@/components/whatsappMessage/WhatsappMessage";
