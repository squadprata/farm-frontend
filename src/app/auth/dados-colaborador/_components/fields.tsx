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
              <div className="border rounded border border-gray-400">
                <FormLabel className="font-bold text-xl pl-6 ">Nome*</FormLabel>
                <FormControl>
                  <Input
                    className="rounded border border-transparent pl-6 w-[410px]"
                    placeholder="Digite o nome do colaborador"
                    {...field}
                  />
                </FormControl>
              </div>
              <div className="rounded border border-gray-400">
                <FormLabel className="font-bold text-xl pl-6">Email*</FormLabel>
                <FormControl>
                  <Input
                    className="rounded border border-transparent pl-6 w-[410px]"
                    placeholder="Digite o email do colaborador"
                    {...field}
                  />
                </FormControl>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="border rounded border border-gray-400">
                <FormLabel className="font-bold text-xl pl-6">Cargo*</FormLabel>
                <FormControl>
                  <Input
                    className="rounded border border-transparent pl-6 w-[410px]"
                    placeholder="Digite o cargo do colaborador"
                    {...field}
                  />
                </FormControl>
              </div>
              <div className="border rounded border border-gray-400">
                <FormLabel className="font-bold text-xl pl-6">CPF*</FormLabel>
                <FormControl>
                  <Input
                    className="rounded border border-transparent pl-6 w-[410px]"
                    placeholder="Digite o CPF do colaborador"
                    {...field}
                  />
                </FormControl>
              </div>
            </div>
            <div className="flex gap-x-4 mb-10">
              <div className="rounded border border-gray-400">
                <FormLabel className="font-bold text-xl pl-6">CRF*</FormLabel>
                <FormControl>
                  <Input
                    className="rounded border border-transparent pl-6 w-[836px]"
                    placeholder="Digite o CRF do colaborador"
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
