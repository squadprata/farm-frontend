"use client";

import Link from "next/link";
import {
    Form,
    FormControl,
    FormLabel,
    FormMessage,
    FormField,
    FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "./schemaValidation";
import { postData } from "@/hooks/usePost";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useState } from "react";

export const NewPasswordsFields = ({ email }: { email: string }) => {
    const [isButtonDisable, setIsButtonDisable] = useState<boolean>(false)
    const { data: session, status } = useSession();

    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data: any) => {
        setIsButtonDisable(true)
        const endPoint = `password-update/${email}`

        try {
            const result = await postData({
                endpoint: endPoint,
                body: {
                    password: data.password
                },
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (result.status === 200) {
                Swal.fire({
                    title: "Sucesso!",
                    text: "Senha atualizada",
                    icon: "success",
                });
            }
        } catch (error: any) {
            Swal.fire({
                title: error.response.data || "Erro!",
                text: "Tente novamente",
                icon: "error",
            });
        }
        finally {
            setIsButtonDisable(false)
        }


    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-primary text-sm font-semibold leading-4">
                                Nova senha
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    className="text-base font-normal text-neutral-300 w-[384px] h-[42px] leading-5"
                                    placeholder="Digite sua senha"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-primary text-sm font-semibold leading-4">
                                Confirme sua senha
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    className="text-base font-normal text-neutral-300 leading-5"
                                    placeholder="Digite sua senha"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    disabled = {isButtonDisable}
                    className="w-full text-white text-xl font-semibold leading-7"
                >
                    Concluir
                </Button>
            </form>
        </Form>
    );
};
