"use client";

import Link from "next/link";
import {
  Form,
  FormControl,
  FormLabel,
  FormMessage,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "./schemaValidation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const LoginFields = () => {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    setError(null);
    setIsSubmitting(true);
    try {
      const result = await signIn("credentials", {
        email,
        password,
      });
      console.log(result);
      if (result?.error) {
        setError("Senha ou e-mail incorretos. Por favor, tente novamente.");
      } else if (result?.ok) {
        router.push("/admin");
      }
    } catch (error) {
      setError("Ocorreu um erro. Por favor, tente novamente.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-semibold">
                E-mail
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Digite seu e-mail"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-semibold">
                Senha
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                  {...field}
                />
              </FormControl>
              {error && (
                <div className="text-red-500 text-sm font-medium pt-2">
                  {error}
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <Link className="text-primary-100 text-sm" href="/recuperar-senha">
          Esqueci minha senha
        </Link>
        <Button
          type="submit"
          className="w-full text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </Form>
  );
};
