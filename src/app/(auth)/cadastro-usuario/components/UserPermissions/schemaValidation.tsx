import * as z from "zod";

export const userPermissionsSchema = z.object({
  permissionType: z.string().min(1, { message: ""}),
});

export type UserPermissionsSchema = z.infer<typeof userPermissionsSchema>;
