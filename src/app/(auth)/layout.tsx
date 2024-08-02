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
    <div className="container min-h-screen flex flex-col items-center">
      <div className="w-full max-w-screen-sm me-auto pt-[85px]">
        <Button
          className="rounded-full py-4"
          variant="outline"
          onClick={() => router.back()}
        >
          <ArrowLeft01Icon size={16} />
          Voltar
        </Button>
      </div>

      <div className="flex flex-grow items-center justify-center w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
