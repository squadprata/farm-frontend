import * as z from "zod";

export const loginSchema = z.object({
  password: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
  confirmPassword: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
})
.refine((values) => {
  return values.password === values.confirmPassword;
},
{
  message: "As senhas não coincidem",
  path: ["confirmPassword"]
}
)

export type LoginSchema = z.infer<typeof loginSchema>;
