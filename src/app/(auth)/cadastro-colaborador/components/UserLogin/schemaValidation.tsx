import * as z from "zod";

export const userLoginSchema = z.object({
  username: z.string().min(1, { message: "Nome do usuário é obrigatório" }),
});

export type UserLoginSchema = z.infer<typeof userLoginSchema>;
