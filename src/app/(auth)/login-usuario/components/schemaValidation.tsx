import * as z from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Campo obrigatório" })
    .email({ message: "Nome de usuário inválido" }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
