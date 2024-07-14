"use client";
import { LoginFields } from "./fields";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Login = () => {
  return (
    <Card className="max-w-[680px] shadow-xl rounded-xl">
      <CardHeader className="mb-0.5">
        <CardTitle className="font-bold text-center text-3xl">
          Criar sua nova senha
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <LoginFields />
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          className="text-xl bg-customGray hover:bg-customGray-900 w-full h-[68px] rounded font-bold mt-10"
          type="submit"
        >
          Concluir
        </Button>
      </CardFooter>
    </Card>
  );
};
