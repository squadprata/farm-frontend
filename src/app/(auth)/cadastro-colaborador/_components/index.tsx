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
    <Card className="max-w-[458px] mt-[115px] mb-[172px] shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="font-bold text-center text-4xl mb-10">
          Crie um login
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Crie um nome de usuário e senha para o seu colaborador
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <LoginFields />
      </CardContent>
      <CardFooter className="flex justify-center pt-8">
        <Button
          className="text-xl bg-customGray hover:bg-customGray-900 w-full h-[68px] rounded font-bold"
          type="submit"
        >
          Cadastrar
        </Button>
      </CardFooter>
    </Card>
  );
};
