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
    <Card className="max-w-[1440px] shadow-xl rounded-xl border border-gray-700">
      <CardHeader>
        <CardTitle className="font-bold text-center text-2xl mb-[20px]">
          Verifique sua caixa de email
        </CardTitle>
        <CardDescription className="flex justify-center mb-10 text-center text-lg text-gray-700">
          Mandaremos um email para confirmar o seu cadastro no FarmApp.
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-center pt-8">
        <Link
          href=""
          className=" justify-center text-gray-700 text-lg ml-6 not-italic"
        >
          Reenviar email
        </Link>
      </CardFooter>
    </Card>
  );
};
