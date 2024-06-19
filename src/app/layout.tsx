import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./_components/NavBar";
import Sidebar from "./_components/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="flex flex-col h-screen w-screen ">
          <div className="flex flex-row h-1/6 w-full bg-customDark ">
            <NavBar />
          </div>
          <div className="flex flex-row h-5/6 w-full">
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}