"use client";

import { SessionProvider } from "next-auth/react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <div>{children}</div>
    </SessionProvider>
  );
}
