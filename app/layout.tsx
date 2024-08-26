import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const ibmMono = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Efix",
  description: "Get your PC fixed with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmMono.className}>{children}</body>
    </html>
  );
}
