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
    <Card className="max-w-[884px] shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="font-bold text-center text-4xl mb-10">
          Permissões
        </CardTitle>
        <CardDescription className="mb-10 text-zinc-500">
          Selecione as permissões que o colaborador terá.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <LoginFields />
      </CardContent>
      <CardFooter className="flex justify-center mt-10 gap-x-6">
        <Button
          className="text-xl bg-none border border-gray-400 hover:bg-customGray-900 p-4 w-[217px] h-[68px] rounded font-bold"
          type="submit"
        >
          Voltar
        </Button>
        <Button
          className="text-xl bg-customGray hover:bg-customGray-900 w-full h-[68px] rounded font-bold"
          type="submit"
        >
          Avançar
        </Button>
      </CardFooter>
    </Card>
  );
};
