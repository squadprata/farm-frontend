"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import ReactLoading from "react-loading";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("load", handleComplete);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("load", handleComplete);
    };
  }, []);

  return (
    <html lang="pt-BR">
      <body className={`relative ${inter.className}`}>
        <div className="absolute top-96 left-2/4">
          {loading && (
            <ReactLoading
              type="bubbles"
              width={60}
              height={60}
              color="#3741BE"
            />
          )}
        </div>
        {children}
      </body>
    </html>
  );
}
