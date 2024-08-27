"use client";

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
import Swal from "sweetalert2";
import { postData } from "@/hooks/usePost";
import { useState } from "react";

export const LoginFields = () => {
  const [isButtonDisable , setIsButtonDisable] = useState(false)
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    setIsButtonDisable(true)   
    try {
      const res = await postData({
        endpoint:"password-reset",
        body: data,
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res)

      if (res.status === 200) {
        Swal.fire({
          title: "E-mail enviado com sucesso!",
          text: "Por favor, verifique sua caixa de e-mail.",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        text: "Erro ao solicitar a redefinição de senha.",
        icon: "error",
      });
    } finally{
      setIsButtonDisable(false)
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
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className=" border-neutral-300 rounded-6 text-base leading-5"
                  placeholder="Digite seu e-mail"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isButtonDisable} className="text-xl text-white leading-7 w-full">
          Enviar
        </Button>
      </form>
    </Form>
  );
};
