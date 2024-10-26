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

export const LoginFields = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      cnp: "",
      cep: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-wrap items-center">
          <div className="w-full sm:w-1/2 px-2 pb-4">
            <FormField
              control={form.control}
              name="nameFarm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">
                    Nome da farmácia
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-neutral-300 rounded-6 text-base leading-5"
                      placeholder="Digite o nome da farmácia"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full sm:w-1/2 px-2 mb-4">
            <FormField
              control={form.control}
              name="cnp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">
                    CNPJ
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-neutral-300 rounded-6 text-base leading-5"
                      placeholder="Digite o CNPJ da farmácia"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full sm:w-1/2 px-2 mb-4">
            <FormField
              control={form.control}
              name="ender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">
                    Endereço
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-neutral-300 rounded-6 text-base leading-5"
                      placeholder="Digite o endereço da farmácia"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-[42px] text-xl text-white leading-7"
        >
          Cadastrar
        </Button>
      </form>
    </Form>
  );
};
