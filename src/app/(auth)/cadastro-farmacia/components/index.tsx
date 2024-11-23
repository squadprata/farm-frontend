"use client";

import { CenterFocusIcon } from "hugeicons-react";
import { LoginFields } from "./fields";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSession } from "next-auth/react";

export const CadastroFarmacia = () => {
  const {data: session} = useSession()

  if (!session) {
    return "Você não está autorizado a adcionar uma nova farmácia"
  }

  return (
    <div className="flex justify-center items-center p-4">
      <Card className="lg:w-[832px] md:w-[750px]">
        <CardHeader>
          <CardTitle className="text-center font-bold text-[32px] text-neutral leading-10 mb-0.5">
            Cadastre sua farmácia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoginFields />
        </CardContent>
      </Card>
    </div>
  );
};
