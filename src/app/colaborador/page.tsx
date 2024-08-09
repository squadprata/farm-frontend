"use client";

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form';
import { Switch } from '@/components/ui/switch';
import { SearchIcon } from 'lucide-react';


const ColaboradorPage = () => {
	const form = useForm()
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div className="flex justify-center mt-20">
			<Card className="w-4/12">
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
									/>
								</div>
							</FormControl>
							<div>
								<Switch className="bg-gray-200 checked:bg-green-400 relative inline-flex h-6 w-11 items-center rounded-full" />
							</div>
						</div>
					</Form>

					<div className="py-5">
						<div className="flex justify-between py-5">
							<div className="flex gap-3">
								<div className="w-14 h-14 bg-gray-400 rounded-full"></div>
								<div>
									<h4 className="font-semibold">André Souza</h4>
									<p>Administrador</p>
								</div>
							</div>
							<div>
								<div className="w-6 h-6 bg-green-600 rounded-full"></div>
								<p>Ativo</p>
							</div>
						</div>

						<div className="flex justify-between py-5">
							<div className="flex gap-3">
								<div className="w-14 h-14 bg-gray-400 rounded-full"></div>
								<div>
									<h4 className="font-semibold">Paula Soares</h4>
									<p>Usuário</p>
								</div>
							</div>
							<div className="">
								<div className="w-6 h-6 bg-gray-400 rounded-full"></div>
								<p>Inativo</p>
							</div>
						</div>

						<div></div>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default ColaboradorPage