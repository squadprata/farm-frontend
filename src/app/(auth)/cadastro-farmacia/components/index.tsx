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
    <Card className="w-[832px]">
      <CardHeader className="reducep-6">
        <CardTitle className="text-center font-bold text-[32px] text-neutral leading-10 mb-0.5">
          Cadastre sua farmácia
        </CardTitle>
      </CardHeader>
      <CardContent>
        <LoginFields />
      </CardContent>
    </Card>
  );
};
