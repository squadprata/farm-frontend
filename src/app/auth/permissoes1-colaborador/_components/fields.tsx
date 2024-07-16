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
            <div className="border border-gray-400 w-[637px] h-[385px] rounded-[25px] block relative">
              <div className="flex items-center mb-[80px] mt-[74.5px]">
                <FormControl>
                  <div className="w-[24px] h-[24px] bg-gray-700 rounded-full ml-[50px]" />
                </FormControl>
                <FormLabel className="ml-[8px]">Farmaceutico</FormLabel>
              </div>
              <div className="flex items-center mb-[80px]">
                <FormControl>
                  <input
                    type="radio"
                    className="w-[24px] h-[24px] ml-[50px] bg-gray-700"
                    name="select"
                  />
                </FormControl>
                <FormLabel className="ml-[8px]">Financeiro</FormLabel>
              </div>

              <div className="flex items-center">
                <FormControl>
                  <input
                    type="radio"
                    className="w-[24px] h-[24px] ml-[50px]"
                    name="select"
                  />
                </FormControl>
                <FormLabel className="ml-[8px]">Admin</FormLabel>
              </div>
              <div className="w-[1px] h-[340px] bg-gray-400 ml-[319px] mt-[-286px] absolute "></div>
              <div className="w-[262px] h-[94px] absolute ml-[350px] mt-[-286px]">
                <h1 className="text-center font-bold mb-4 text-xl">
                  Permissões
                </h1>

                <ul className="mb-10 text-zinc-500 text-xs  list-none">
                  <li className="mb-2">Cadastrar produtos</li>
                  <li className="mb-2">Configurações de produto</li>
                  <li>Colocar produtos</li>
                </ul>
              </div>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
};
