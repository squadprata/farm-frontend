import React, { useEffect, useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import axios from 'axios';
import { useSession } from 'next-auth/react'
import { api, fetchFromAPI } from '@/services/api'
import { useFetch } from '@/hooks/useFetch'

interface User {
  name: string,
  password: string,
  cargo: string,
  ativo: boolean,
  email: string,
  cpf: string,
  crf: string,
  role: string
}

const FormProfile = ({ params }: { params: { id: string } }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState(false)
  const { id } = params;
  const { data: session } = useSession()
  const token = session?.user?.token

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://farm-api-g2zo.onrender.com/user/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        setUser(response.data)
        setStatus(response.data.ativo);
        setLoading(false)
      })
      .catch((err) => {
        console.error("Erro ao fazer requisição:", err.response ? err.response.data : err.message)
        setLoading(false);
      })
  }, [id, token])

  const form = useForm<User>({
    defaultValues: {
      name: user?.name,
      password: user?.password,
      email: user?.email,
      cargo: user?.cargo,
      cpf: user?.cpf,
      crf: user?.crf,
      ativo: status
    },
  })


  const onSubmit = async (data: User) => {
    try {
      const response = await axios.put(
        `https://farm-api-g2zo.onrender.com/user/${id}`,
        {
          name: data.name,
          crf: data.crf,
          email: data.email,
          password: data.password,
          cargo: data.cargo,
          role: user?.role,
          cpf: data.cpf,
          ativo: status
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (response.status === 200) {
        alert("Profile atualizado com sucesso")
        setUser(response.data)
      } else {
        console.log("Falha na actualização do perfil", response.data)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Erro ao atualizar o perfil:", error.response ? error.response.data : error.message);
      } else {
        console.log("Erro desconhecido:", error);
      }
      alert("Falha na atualização do perfil. Por favor, tente novamente.");
    }
  }


  if (loading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  if (!user) {
    return <p>Usuário não encontrado</p>
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        encType="multipart/form-data"
      >
        <div className="flex justify-center items-center gap-20">
          <div className="flex items-center flex-col lg:flex-row gap-5">
            <div className="bg-neutral-200 w-28 h-28 rounded-full"></div>
            <div>
              <h2 className="font-semibold text-xl">{user.name}</h2>
              <p>{user.cargo}</p>
            </div>
          </div>

          <div>
            <Switch checked={status} onCheckedChange={setStatus} />
            <p>Ativo</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="uppercase font-semibold text-xl">Gerais</h2>

          <div className="flex gap-x-4 flex-col lg:flex-row mt-4">
            <div className="w-full lg:w-6/12">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-semibold">
                      Usuário
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-6 text-base leading-5 border-neutral-300 "
                        placeholder="Digite seu nome de usuário"
                        defaultValue={user.name}
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-semibold">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-6 text-base leading-5 border-neutral-300 "
                        placeholder="Digite seu email"
                        defaultValue={user.email}
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
                        defaultValue={user.cpf}
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
                        defaultValue={user.crf}
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
        </div>
      </form>
    </FormProvider>
  )
}

export default FormProfile