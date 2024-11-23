"use client";

import { useSession } from "next-auth/react";
import { RegisterAdmData } from "./fields";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export const RegisterAdmCard = () => {
  const {data: session} = useSession()

  if (!session) {
    return "Você não está autorizado adicionar um admin"
  }
  
  return (
    <div className="flex justify-center items-center p-4">
      <Card className="w-full max-w-[832px] lg:w-[832px] md:w-[750px]">
        <CardHeader>
          <CardTitle className="text-center font-bold text-[32px] text-neutral leading-10 mb-0.5">
            Cadastre-se
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterAdmData />
        </CardContent>
      </Card>
    </div>
  );
};
