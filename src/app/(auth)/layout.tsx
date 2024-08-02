"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft01Icon } from "hugeicons-react";
import { useRouter } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex">
      <div className="relative container h-screen flex flex-col items-center">
        <Button
          className="absolute left-12 top-20 rounded-full py-4"
          variant="outline"
          onClick={() => router.back()}
        >
          <ArrowLeft01Icon size={16} />
          Voltar
        </Button>

        <div className="flex items-center justify-center w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
