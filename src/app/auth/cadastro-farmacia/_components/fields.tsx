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
            <div className="flex gap-x-4">
              <div className="border rounded border border-gray-400 mt-10">
                <FormLabel className="font-bold text-xl pl-6 ">
                  Nome da farmácia*
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded border border-transparent pl-6 w-[410px]"
                    placeholder="Digite o nome da farmácia"
                    {...field}
                  />
                </FormControl>
              </div>
              <div className="rounded border border-gray-400 mt-10">
                <FormLabel className="font-bold text-xl pl-6">CNPJ*</FormLabel>
                <FormControl>
                  <Input
                    className="rounded border border-transparent pl-6 w-[410px]"
                    placeholder="Digite seu CNPJ"
                    {...field}
                  />
                </FormControl>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="border rounded border border-gray-400">
                <FormLabel className="font-bold text-xl pl-6">
                  Endereço*
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded border border-transparent pl-6 w-[604px]"
                    placeholder="Digite o endereço"
                    {...field}
                  />
                </FormControl>
              </div>
              <div className="border rounded border border-gray-400">
                <FormLabel className="font-bold text-xl pl-6">
                  Numero*
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded border border-transparent pl-6 w-[216px]"
                    placeholder="nº"
                    {...field}
                  />
                </FormControl>
              </div>
            </div>
            <div className="flex gap-x-4 mt-10 mb-10">
              <div className="rounded border border-gray-400">
                <FormLabel className="font-bold text-xl pl-6">Cep*</FormLabel>
                <FormControl>
                  <Input
                    className="rounded border border-transparent pl-6 w-[410px]"
                    placeholder="Digite o CEP da cidade"
                    {...field}
                  />
                </FormControl>
              </div>
              <div className="border rounded border border-gray-400 ">
                <FormLabel className="font-bold text-xl pl-6">
                  Cidade*
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded border border-transparent pl-6 w-[410px]"
                    placeholder="Cidade da farmácia"
                    {...field}
                  />
                </FormControl>
              </div>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
};
