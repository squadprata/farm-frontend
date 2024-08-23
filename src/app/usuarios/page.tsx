"use client";

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form';
import { Switch } from '@/components/ui/switch';
import { SearchIcon } from 'lucide-react';
import axios from 'axios';

interface User {
	name: string,
	cargo: string,
  ativo: boolean
}

const ColaboradorPage = () => {
	const form = useForm()
	const [users, setUsers] = useState<User[]>([])
	const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [showActive, setShowActive] = useState(true)

  useEffect(() => {
    axios
      .get("https://farm-api-staging.onrender.com/users", {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        setUsers(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Erro ao fazer requisição:", err.response ? err.response.data : err.message)
        setLoading(false);
      })
  }, [])
  
	const filteredUsers = users.filter(({ name, cargo, ativo }) =>
    (showActive ? ativo : !ativo) &&
    (name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cargo.toLowerCase().includes(searchTerm.toLowerCase()))
  )

	return (
		<div className="flex justify-center mt-20">
			<Card className=" w-11/12 lg:w-5/12">
				<CardHeader className="reducep-6">
					<CardTitle className="text-center font-bold text-[32px] text-neutral leading-10 mb-0.5">
						Usuários
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<div className="flex justify-between items-center">
							<FormControl>
								<div className="relative">
									<span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
										<SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
									</span>
									<Input
										className="rounded-6 text-base leading-5 border-neutral-300 pl-10"
										placeholder="Pesquisar por nome ou CPF"
										value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
									/>
								</div>
							</FormControl>
							<div>
								<Switch checked={showActive}
                  onCheckedChange={setShowActive} 
                  className="bg-gray-200 checked:bg-green-400 relative inline-flex h-6 w-11 items-center rounded-full" />
                <p>{showActive ? "Ativos" : "Inativos"}</p>
							</div>
						</div>
					</Form>

					<div className="py-5">
          {loading ? (
              <p>Carregando...</p>
            ) : filteredUsers.length > 0 ? (
              filteredUsers.map(({ name, cargo, ativo }) => (
                <div key={name} className="flex justify-between py-5">
                  <div className="flex gap-3">
                    <div className="w-14 h-14 bg-gray-400 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold">{name}</h4>
                      <p>{cargo}</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                    <p>{ativo ? "Ativo" : "Inativo"}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Nenhum usuário encontrado.</p>
            )}
          </div>
				</CardContent>
			</Card>
		</div>
	)
}

export default ColaboradorPage