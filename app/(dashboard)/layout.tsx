import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Sidebar from "./components/layouts/sidebar";

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SportOn Admin",
  description: "Admin Dashboard for SportOn Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <div className="flex min-h-screen bg-white">
          <Sidebar />
          <main className="flex-1 ml-80 p-14 bg-[#F7F9FA] min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
