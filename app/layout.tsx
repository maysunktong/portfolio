import type { Metadata } from "next";
import {
  Lato,
  Inter,
  DM_Sans,
  Quicksand,
  JetBrains_Mono,
} from "next/font/google";
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

const QuicksandSans = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600", "700"],
});

const JetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
 title: "May Sunktong – Frontend Developer",
  description: "Portfolio",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "May Sunktong – Frontend Developer",
    description: "Portfolio",
    url: "https://portfolio-maysunktong.vercel.app/",
    siteName: "May Sunktong Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dpgdy4ayz/image/upload/v1759152087/CleanShot_2568-09-29_at_15.21.13_2x_h2vdwh.png",
        width: 1200,
        height: 630,
        alt: "Portfolio preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${LatoSans.variable} ${InterSans.variable} ${DMSans.variable} ${QuicksandSans.variable} ${JetBrains.variable} antialiased min-h-screen w-full flex justify-center`}
      >
        <div className="w-full md:w-4/5 lg:w-2/3 mx-auto px-4">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
