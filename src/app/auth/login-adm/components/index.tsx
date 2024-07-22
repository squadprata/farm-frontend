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
    <Card className="max-w-[460px] shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="font-bold text-center text-4xl">Login</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <LoginFields />
        <Link href="" className="text-gray-400 text-xs ml-6 not-italic">
          esqueci minha senha
        </Link>
      </CardContent>
      <CardFooter className="flex justify-center pt-8">
        <Button
          className="text-xl bg-customGray hover:bg-customGray-900 w-full h-[68px] rounded font-bold bg-primary"
          type="submit"
        >
          Entrar
        </Button>
      </CardFooter>
    </Card>
  );
};
