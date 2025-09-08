import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../../components/layout/Sidebar";


export const metadata: Metadata = {
  title: "Fabrizio Fagiolo – Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-neutral-900 text-gray-200 antialiased">
        <div className="min-h-dvh grid grid-cols-1 md:grid-cols-[240px_1fr]">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}