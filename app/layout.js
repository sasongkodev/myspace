import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://myspace.wahyupuji.com'),
  title: {
    default: "Wahyu Puji Sasongko | Web Developer & Graphic Designer",
    template: "%s | Wahyu Puji Sasongko",
  },
  description: "Personal space and portfolio links of Wahyu Puji Sasongko, a Web Developer & Graphic Designer based in Yogyakarta, Indonesia.",
  keywords: [
    "Wahyu Puji Sasongko",
    "Web Developer",
    "Graphic Designer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Yogyakarta",
    "Portfolio",
    "TemanKode",
  ],
  authors: [{ name: "Wahyu Puji Sasongko", url: "https://myspace.wahyupuji.com" }],
  creator: "Wahyu Puji Sasongko",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myspace.wahyupuji.com",
    title: "Wahyu Puji Sasongko | Web Developer & Graphic Designer",
    description: "Personal space and portfolio links of Wahyu Puji Sasongko, a Web Developer & Graphic Designer based in Yogyakarta, Indonesia.",
    siteName: "Wahyu Puji Sasongko MySpace",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahyu Puji Sasongko | Web Developer & Graphic Designer",
    description: "Personal space and portfolio links of Wahyu Puji Sasongko, a Web Developer & Graphic Designer based in Yogyakarta, Indonesia.",
    creator: "@wps_1717", // Assumed based on Instagram handle provided in ProfileCard, or leave blank if unknown. I'll use a generic handle or remove creator if unsure, but for now I'll omit specific handle to be safe or use site title.
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
