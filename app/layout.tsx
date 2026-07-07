import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Playfair_Display, Great_Vibes, Parisienne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const quoteScript = Parisienne({
  variable: "--font-quote-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Grace 101 Independent Living Home | Safe Housing for Women in Houston",
  description: "Grace 101 Independent Living Home provides safe, supportive housing and life-enriching opportunities for women rebuilding their lives with dignity, stability, and hope.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} ${playfair.variable} ${script.variable} ${quoteScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
