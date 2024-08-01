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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "./schemaValidation";

export const LoginFields = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-x-4">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-semibold">
                  Nome Completo
                </FormLabel>
                <FormControl>
                  <Input
                    className=" border-neutral-300 rounded-6 text-base leading-5"
                    placeholder="Digite seu nome completo"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                    className="border-neutral-300 rounded-6 text-base leading-5 w-[384px] h-[42px]"
                    placeholder="Digite seu e-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full gap-x-4">
          <div className="w-full">
            <FormField
              control={form.control}
              name="cargo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">
                    Cargo
                  </FormLabel>
                  <Select>
                    <SelectTrigger className="border-neutral-300">
                      <SelectValue placeholder="Selecione um cargo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="farmaceutico">
                          Farmaceutico
                        </SelectItem>
                        <SelectItem value="atendente">Atendente</SelectItem>
                        <SelectItem value="caixa">Caixa</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">
                    CPF
                  </FormLabel>
                  <FormControl>
                    <Input
                      className=" border-neutral-300 rounded-6 text-base leading-5 w-[384px] h-[42px]"
                      placeholder="Digite seu CPF"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex gap-x-4">
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
                    className=" border-neutral-300 rounded-6 text-base leading-5 w-[384px] h-[42px]"
                    placeholder="Digite sua senha"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-semibold">
                  Confirme sua senha
                </FormLabel>
                <FormControl>
                  <Input
                    className=" border-neutral-300 rounded-6 text-base leading-5 w-[384px] h-[42px]"
                    placeholder="Digite sua senha"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
