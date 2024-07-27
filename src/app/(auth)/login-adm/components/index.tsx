"use client";

import { LoginFields } from "./fields";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Login = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center font-bold text-[32px] text-neutral">
          Login
        </CardTitle>
      </CardHeader>
      <CardContent>
        <LoginFields />
      </CardContent>
    </Card>
  );
};
