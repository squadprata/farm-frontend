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
        <CardTitle className="font-bold text-center text-2xl mb-5">
          Recupere sua senha
        </CardTitle>
        <CardDescription className="mb-6 text-gray-400 text-xl text-gray-600">
          insira seu email associado a sua conta para recuperar senha.
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
          Enviar
        </Button>
      </CardFooter>
    </Card>
  );
};
