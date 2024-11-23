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
import { registerSchema, type RegisterSchema } from "./schemaValidation";
import { postData } from "@/hooks/usePost";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export const RegisterAdmData = () => {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      fullname: "",
      cargo: "",
      cpf: "",
      confirmPassword: "",
      fileUpload: undefined,
    },
  });

  const onSubmit = async (data: RegisterSchema) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key as keyof RegisterSchema] as any);
      });

      const response = await postData({
        endpoint: "/admin-register",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Cadastro realizado com sucesso:", response);
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar administrador:", error);
      alert("Erro ao cadastrar administrador. Tente novamente.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        encType="multipart/form-data"
      >
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
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <SelectTrigger className="w-full border-neutral-300 rounded-6 text-base leading-5">
                        <SelectValue placeholder="Selecione seu cargo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Farmacêutico">
                          Farmacêutico
                        </SelectItem>
                        <SelectItem value="Atendente">Atendente</SelectItem>
                        <SelectItem value="Caixa">Caixa</SelectItem>
                      </SelectContent>
                    </Select>
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

          <div className="w-full sm:w-1/2 px-2 mb-4">
            <FormField
              control={form.control}
              name="fileUpload"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">
                    Upload de Arquivo
                  </FormLabel>
                  <FormControl>
                    <input
                      type="file"
                      className="w-full border-neutral-300 rounded-6 text-base leading-5"
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          field.onChange(e.target.files[0]);
                        }
                      }}
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
