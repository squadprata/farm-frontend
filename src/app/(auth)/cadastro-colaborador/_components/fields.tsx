"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormLabel,
  FormMessage,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export const LoginFields = () => {
  const form = useForm();

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <div className="border rounded border border-gray-400 mt-10">
              <FormLabel className="font-bold text-xl pl-6 ">
                Usuário*
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="rounded border border-transparent pl-6 w-[362px]"
                  placeholder="Digite o nome do colaborador"
                  {...field}
                />
              </FormControl>
            </div>
            <div className="rounded border border-gray-400 mt-4">
              <FormLabel className="font-bold text-xl pl-6">Senha*</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="rounded border border-transparent pl-6 w-[362px]"
                  placeholder="Digite sua senha"
                  {...field}
                />
              </FormControl>
            </div>

            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
};
