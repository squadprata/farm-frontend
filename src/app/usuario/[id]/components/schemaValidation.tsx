import * as z from "zod";

export const updateSchema = z.object({
  name: z.string({ message: "Este campo é obrigatório" }),
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
  cargo: z.string({ message: "Este campo é obrigatório" }),
  cpf: z
    .string({ message: "Este campo é obrigatório" })
    .min(11, { message: "Insira um CPF válido" }),
  crf: z.string().min(1, { message: "CRF do colaborador é obrigatório" }),
});

export type UpdateSchema = z.infer<typeof updateSchema>;
