import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Praveen Maurya",
  description: "This is Praveen Maurya portfolio made in 3d using three js and react three fibre",
  icons:"https://iampraveen.hi.link/_assets/site-data/ops_6hOSF6QUzR0lDZS8vR/images/2097ca8a117cce71f84e4ff853ef61097aedac06f1d68604d93a1ba407f80e31.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
