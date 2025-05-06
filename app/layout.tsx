import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Dwight Vincet Site",
//   description: "Writer of I'm Out: The Reason Why I'm Leaving The Church",
// };

const faviconVersion = "v1.2"; // Declare it here

export const metadata: Metadata = {
  title: {
    template: "%s | Dwight Vincent Green Jr.",
    default: "I'm Out: The Reason Why I'm Leaving The Church",
  },
  description: "Official site for the Amazon book by Dwight Vincent Green Jr.",
  icons: {
    icon: [
      `/assets/logo/Author-Logo.png?v=${faviconVersion}`,
      // "/favicon.ico",
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
