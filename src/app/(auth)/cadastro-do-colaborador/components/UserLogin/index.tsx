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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginSchema, type UserLoginSchema } from "./schemaValidation";

interface UserLoginProps {
  onNext: (data: any) => void;
}

export const UserLogin: React.FC<UserLoginProps> = ({ onNext }) => {
  const form = useForm<UserLoginSchema>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (data: any) => {
    onNext(data);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center font-bold text-[32px] text-neutral leading-10">
          Crie um login
        </CardTitle>
        <CardDescription className="text-center">
          Crie um nome de usuário para o seu colaborador.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">
                    Usuário
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Crie um usuário" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Avançar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
