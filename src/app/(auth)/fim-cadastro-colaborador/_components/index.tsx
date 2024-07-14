"use client";
import { LoginFields } from "./fields";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Login = () => {
  return (
    <Card className="max-w-[680px] shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="font-bold text-center text-4xl mb-5">
          Cadastro concluido!
        </CardTitle>
        <CardDescription className="flex mt-[20px] text-gray-700 text-xl">
          Compartilhe o login e a senha para que o colaborador tenha acesso.
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-center pt-8">
        <Button
          type="button"
          className="text-2xl bg-customGray hover:bg-customGray-900 w-full h-[68px] rounded font-bold"
        >
          Concluir
        </Button>
      </CardFooter>
    </Card>
  );
};
