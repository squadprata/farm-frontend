import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
import { userDataSchema, type UserDataSchema } from "./schemaValidation";

interface UserDataProps {
  onNext: (data: any) => void;
  onPrevious: (data: any) => void;
}

export const UserData: React.FC<UserDataProps> = ({ onNext, onPrevious }) => {
  const form = useForm<UserDataSchema>({
    resolver: zodResolver(userDataSchema),
    defaultValues: {
      collaborator_name: "",
      email: "",
      role: "",
      cpf: "",
      crf: "",
    },
  });

  const onSubmit = (data: any) => {
    onNext(data);
  };

  return (
    <Card className="max-w-2xl w-full">
      <CardHeader>
        <CardTitle className="text-center font-bold text-[32px] text-neutral leading-10">
          Dados
        </CardTitle>
        <CardDescription className="text-center">
          Coloque os dados do novo colaborador
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex  gap-4">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="collaborator_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-semibold">
                        Nome do colaborador
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-semibold">
                        E-mail
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-semibold">
                        Cargo
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="cpf"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-semibold">
                        CPF
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="999.999.999-99" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="crf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">
                    CRF
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o CRF do colaborador"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-2">
              <Button
                className="w-full bg-neutral-400 hover:bg-neutral flex-1"
                onClick={onPrevious}
              >
                Voltar
              </Button>
              <Button className="w-full" type="submit">
                Avançar
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
