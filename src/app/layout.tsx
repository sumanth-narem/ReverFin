import type { Metadata } from "next";
import localFont from "next/font/local";
import LenisAOSWrapper from "@/components/animation/LenisAOSWrapper";
import "./globals.css";

const allianceNo2 = localFont({
  src: [
    {
      path: "../../public/fonts/AllianceNo2Regular.otf",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-alliance-no2",
  display: "swap"
});

const ppMori = localFont({
  src: [
    {
      path: "../../public/fonts/PPMori-Regular.otf",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-ppmori",
  display: "swap"
})

export const metadata: Metadata = {
  title: "AI Driven Finance Management",
  description: "A Virtual Finance Management Layer of Controls, Best Practices and Analytics that provides real-time insights to enhance enterprise wide Productivity and Performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${allianceNo2.variable} ${ppMori.variable} bg-primary-800 text-white`}>
        <LenisAOSWrapper>
          {children}
        </LenisAOSWrapper>
      </body>
    </html>
  );
}
