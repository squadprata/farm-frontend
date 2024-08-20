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

import { postData } from "@/hooks/usePost"; // Renomeado para evitar confusão

export const LoginFields = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      fullname: "",
      cargo: "",
      cpf: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const response = await postData({
        endpoint: "/admins",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Cadastro realizado com sucesso:", response);
    } catch (error) {
      console.error("Erro ao cadastrar administrador:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full sm:w-1/2 px-2 pb-4">
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
                      className="w-full border-neutral-300 rounded-6 text-base leading-5"
                      placeholder="Digite seu nome completo"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full border-neutral-300 rounded-6 text-base leading-5"
                      placeholder="Digite seu e-mail"
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
              name="cargo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">
                    Cargo
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full border-neutral-300 rounded-6 text-base leading-5"
                      placeholder="Digite seu cargo"
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
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">
                    CPF
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full border-neutral-300 rounded-6 text-base leading-5"
                      placeholder="Digite seu CPF"
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">
                    Senha
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full border-neutral-300 rounded-6 text-base leading-5"
                      placeholder="Digite sua senha"
                      type="password"
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
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">
                    Confirme sua senha
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full border-neutral-300 rounded-6 text-base leading-5"
                      placeholder="Digite sua senha"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit" className="w-full text-xl text-white leading-7">
          Cadastrar
        </Button>
      </form>
    </Form>
  );
};
