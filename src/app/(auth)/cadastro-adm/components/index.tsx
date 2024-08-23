"use client";

import { CenterFocusIcon } from "hugeicons-react";
import { RegisterAdmData } from "./fields";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const RegisterAdmCard = () => {
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
