import * as z from "zod";

export const loginSchema = z.object({
  fullname: z.string({ message: "Este campo é obrigatório" }),
  email: z
    .string()
    .min(1, { message: "E-mail é obrigatório" })
    .email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
  confirmPassword: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
  cargo: z
    .string({ message: "Este campo é obrigatório" })
    .email({ message: "Selecione um cargo válido" }),
  cpf: z
    .string({ message: "Este campo é obrigatório" })
    .min(11, { message: "Insira um CPF válido" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
