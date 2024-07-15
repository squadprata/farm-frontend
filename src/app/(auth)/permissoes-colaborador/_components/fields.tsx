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
                  <input
                    type="radio"
                    className="w-[24px] h-[24px] ml-[50px]"
                    name="select"
                  />
                </FormControl>
                <FormLabel className="ml-[8px]">Farmaceutico</FormLabel>
              </div>
              <div className="flex items-center mb-[80px]">
                <FormControl>
                  <input
                    type="radio"
                    className="w-[24px] h-[24px] ml-[50px]"
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
                <p className="mb-10 text-zinc-500 text-xs ">
                  Clique em uma das opções para ver as permissões
                </p>
              </div>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
};
