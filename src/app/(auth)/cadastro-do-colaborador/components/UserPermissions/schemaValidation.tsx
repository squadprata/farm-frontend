import * as z from "zod";

export const userPermissionsSchema = z.object({
  username: z.string().min(1, { message: "Nome do usuário é obrigatório" }),
});

export type UserPermissionsSchema = z.infer<typeof userPermissionsSchema>;
