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
import axios from "axios";
import Swal from "sweetalert2";

export const LoginFields = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const res = await axios.post("/recuperar-senha", data);
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

        <Button type="submit" className="text-xl text-white leading-7 w-full">
          Enviar
        </Button>
      </form>
    </Form>
  );
};
