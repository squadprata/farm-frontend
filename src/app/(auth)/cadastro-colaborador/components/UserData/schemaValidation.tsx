import * as z from "zod";

export const userDataSchema = z.object({
  collaborator_name: z
    .string()
    .min(1, { message: "Nome do colaborador é obrigatório" }),
  email: z
    .string()
    .min(1, { message: "E-mail do colaborador é obrigatório" })
    .email(),
  role: z.string().min(1, { message: "Cargo do colaborador é obrigatório" }),
  cpf: z.string().min(1, { message: "CPF do colaborador é obrigatório" }),
  crf: z.string().min(1, { message: "CRF do colaborador é obrigatório" }),
});

export type UserDataSchema = z.infer<typeof userDataSchema>;
