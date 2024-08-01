"use client";

import { LoginFields } from "./fields";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Login = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center font-bold text-[32px] text-neutral-500 leading-10">
          Crie sua nova senha
        </CardTitle>
      </CardHeader>
      <CardContent>
        <LoginFields />
      </CardContent>
    </Card>
  );
};
