import type { Metadata } from "next";
import { Lato, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const LatoSans = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

const InterSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});

const DMSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "May Sunktong",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${LatoSans.variable} ${InterSans.variable} ${DMSans.variable} antialiased min-h-screen w-full flex justify-center`}
      >
        <div className="w-full md:w-4/5 lg:w-3/5 mx-auto px-4">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
