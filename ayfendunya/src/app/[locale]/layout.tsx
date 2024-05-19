import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[100vw] min-h-screen overflow-x-hidden bg-[--color5] flex flex-col tracking-widest">
        <Header />
        <main className="h-svh w-full grow" >{children}</main>
      </body>
    </html>
  );
}
