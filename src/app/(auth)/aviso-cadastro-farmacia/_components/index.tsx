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
    <Card className="max-w-[680px] shadow-xl rounded-xl border border-gray-700">
      <CardHeader>
        <CardTitle className="font-bold text-center text-2xl mb-[20px]">
          Farmácia cadastrada!
        </CardTitle>
        <CardDescription className="flex justify-center mb-10 text-center text-lg text-gray-700">
          Estamos te direcionando para a dashboard...
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
