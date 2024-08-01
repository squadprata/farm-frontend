import * as z from "zod";

export const loginSchema = z.object({
  nameFarm: z.string({ message: "Este campo é obrigatório." }),
  cnp: z
    .string({ message: "Este campo é obrigatório." })
    .min(14, { message: "Insira um CNPJ válido" }),

  cep: z.string().min(8, { message: "Insira um CEP válido" }),
  city: z.string({ message: "Campo obrigatório." }),

  ender: z.string({ message: "Campo obrigatório." }),

  numero: z.string({ message: "Campo obrigatório." }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
