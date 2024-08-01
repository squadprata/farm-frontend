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

export const Login = () => {
  return (
    <Card className="w-[512px]">
      <CardHeader className="reducep-6">
        <CardTitle className="text-center font-bold text-[32px] text-neutral leading-10 mb-0.5">
          Recupere sua senha
        </CardTitle>
        <CardDescription className="font-normal text-center text-xl text-neutral-400 leading-7">
          Insira seu email associado a sua conta para recuperar a senha.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginFields />
      </CardContent>
    </Card>
  );
};
