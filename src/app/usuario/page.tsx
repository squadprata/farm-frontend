"use client";

import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PerfilPage = () => {
  const form = useForm()
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex justify-center">
      <Card className="w-7/12 mt-10 p-8">
        <div className="flex justify-center items-center gap-20">
          <div className="flex items-center gap-5">
            <div className="bg-neutral-200 w-28 h-28 rounded-full"></div>
            <div>
              <h2 className="font-semibold text-xl">Paula Soares</h2>
              <p>Usuário</p>
            </div>
          </div>

          <div>
            <Switch />
            <p>Ativo</p>
          </div>
        </div>

        <div className="mt-10">
        <FormProvider {...form}>
          <h2 className="uppercase font-semibold text-xl">Gerais</h2>

          <div className="flex gap-x-4 flex-col lg:flex-row mt-4">
            <div className="w-full lg:w-6/12">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-semibold">
                      Usuário
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-6 text-base leading-5 border-neutral-300 "
                        placeholder="Digite seu nome de usuário"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full lg:w-6/12">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-semibold">
                      Senha
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-6 text-base leading-5 border-neutral-300 "
                        placeholder="Digite sua senha"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <h2 className="uppercase font-semibold text-xl">Dados pessoais</h2>
          <div className="flex gap-x-4 flex-col lg:flex-row mt-4">
            <div className="w-full">
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-semibold">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-6 text-base leading-5 border-neutral-300 "
                        placeholder="Digite seu email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex gap-x-4 flex-col lg:flex-row">
            <div className="w-full lg:w-6/12">
              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-semibold">
                      CPF
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-6 text-base leading-5 border-neutral-300 "
                        placeholder="Digite seu CPF"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full lg:w-6/12">
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
                        className="rounded-6 text-base leading-5 border-neutral-300 "
                        placeholder="Digite seu CRF"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="cargo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-semibold">
                    Cargo
                  </FormLabel>
                  <Select>
                    <SelectTrigger className="border-neutral-300">
                      <SelectValue placeholder="Selecione um cargo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="farmaceutico">
                          Farmaceutico
                        </SelectItem>
                        <SelectItem value="atendente">Atendente</SelectItem>
                        <SelectItem value="caixa">Caixa</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full h-[42px] text-xl text-white leading-7">
            Editar
          </Button>
        </FormProvider>
        </div>
      </Card>
    </div>
  )
}

export default PerfilPage