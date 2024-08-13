import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  userPermissionsSchema,
  type UserPermissionsSchema,
} from "./schemaValidation";
import { useState } from "react";

interface UserPermissionsProps {
  onNext: (data: any) => void;
  onPrevious: (data: any) => void;
}

export const UserPermissions: React.FC<UserPermissionsProps> = ({
  onNext,
  onPrevious,
}) => {
  const [selectedPermissionType, setSelectedPermissionType] = useState<"USER"| "ADMIN">("USER")
  
  const form = useForm<UserPermissionsSchema>({
    resolver: zodResolver(userPermissionsSchema),
    defaultValues: {
      permissionType: "USER",
    },
  });

  const onSubmit = (data: any) => {
    onNext(data);
  };

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle className="text-center font-bold text-[32px] text-neutral leading-10">
          Permissões
        </CardTitle>
        <CardDescription className="text-center">
          Selecione as permissões que o colaborador terá.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="permissionType"
              render={({ field }) => (
                <div className="flex border rounded p-6 w-full">
                  <div className="flex h-full">
                    <FormItem>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col"
                        >
                          <FormItem className="flex items-center space-x-3">
                            <FormControl>
                              <RadioGroupItem
                                className="text-black"
                                value="USER"
                                defaultChecked
                                onClick={() => setSelectedPermissionType("USER")}
                              />
                            </FormControl>
                            <FormLabel>Usuário</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3">
                            <FormControl>
                              <RadioGroupItem
                                className="text-black"
                                value="ADMIN"
                                onClick={() => setSelectedPermissionType("ADMIN")}
                              />
                            </FormControl>
                            <FormLabel>Administrador</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                  <div className="w-full flex justify-center">
                    <article className="w-fit text-left flex flex-col items-start justify-start">
                      <h1 className="text-xl text-neutral">Permissões</h1>
                      {
                        selectedPermissionType === "USER" &&
                        <ul className="flex flex-col list-none text-neutral-400 font-regular text-sm">
                          <li>Cadastrar produtos</li>
                          <li>Configurações de produtos</li>
                          <li>Colocar avisos</li>
                        </ul>
                      }
                      {
                        selectedPermissionType === "ADMIN" &&
                        <ul className="flex flex-col list-none text-neutral-400 font-regular text-sm">
                            <li>Visualizar histórico detalhado</li>
                            <li>Colocar avisos</li>
                            <li>Criação de lista de compras</li>
                            <li>Cadastrar produtos</li>
                            <li>Gerar relatórios</li>
                            <li>Adicionar colaboradores</li>
                          </ul>
                      }
                    </article>
                  </div>
                </div>
              )}
            />
            <div className="flex gap-2 pt-6">
              <Button
                className="w-full bg-neutral-400 hover:bg-neutral flex-1"
                onClick={onPrevious}
              >
                Voltar
              </Button>
              <Button className="w-full" type="submit">
                Concluir
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
