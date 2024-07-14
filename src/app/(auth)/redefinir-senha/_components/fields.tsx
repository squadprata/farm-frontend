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
            <div className="border rounded border border-gray-400 pt-[8px] h-[89px]">
              <FormLabel className="font-bold text-xl pl-6 ">Email</FormLabel>

              <FormControl>
                <Input
                  className="rounded border border-transparent pl-6 w-[630px]"
                  placeholder="Digite seu e-mail"
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
