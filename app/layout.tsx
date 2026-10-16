import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import Script from "next/script";

import { GoogleAnalytics } from "@next/third-parties/google";






import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.szpdroeselare.be"),
  title: "SZPD Roeselare",
  description: "Stoel Zitten Pils Drinken, studentenvereniging uit Roeselare",
};

const linkClass =
  "text-lg sm:text-2xl lg:text-4xl !text-black hover:scale-110 transition-all duration-500";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

<head>
  <Script
    src="https://cdn.cookie-script.com/s/8b7b1cb4868ac6e9520767b0800cd2a6.js"
    strategy="beforeInteractive"
  />
</head>


      <body className="min-h-full flex flex-col bg-white text-black overflow-x-hidden">
        <nav className="bg-white w-full py-3 lg:py-0 lg:h-35">
          <div className="h-full flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-12 px-4">
            <Link
               href="/">               
                <img
                  src="/logoSite.jpg"
                  alt="Logo SZPD"
                  className="h-16 sm:h-20 lg:h-30 w-auto cursor-pointer transition-transform duration-500 hover:rotate-12"
                />
              </Link>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 sm:gap-x-8 lg:gap-12">
              <Link href="/" className={linkClass}>
                Home
              </Link>
              <Link href="/praesidium" className={linkClass}>
                Praesidium
              </Link>
              <Link href="/events" className={linkClass}>
                Events
              </Link>
              <Link href="/fotos" className={linkClass}>
                Foto&apos;s
              </Link>
              <Link href="/partners" className={linkClass}>
                Onze Partners
              </Link>
              <Link href="/contact" className={linkClass}>
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <div className="w-full">
          <div className="h-3 sm:h-5 w-full bg-blue-700" />
          <div className="h-3 sm:h-5 w-full bg-yellow-300" />
        </div>

        {children}


                <footer className="w-full bg-blue-700 text-white mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>
              © {new Date().getFullYear()} Stoel Zitten Pils Drinken
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
              <Link href="/praesidium" className="hover:text-yellow-300 transition">
                Praesidium
              </Link>
              <Link href="/events" className="hover:text-yellow-300 transition">
                Events
              </Link>
              <Link href="/fotos" className="hover:text-yellow-300 transition">
                Foto's
              </Link>
              <Link href="/partners" className="hover:text-yellow-300 transition">
                Onze Partners
              </Link>
              <Link href="/contact" className="hover:text-yellow-300 transition">
                Contact
              </Link>
            </div>
          </div>
        </footer>
        <GoogleAnalytics gaId="G-6KPGMWPNS7" />

      </body>
    </html>



  );
}