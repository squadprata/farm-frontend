"use client";

import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { UserLogin } from "./UserLogin";
import { UserData } from "./UserData";
import { UserPermissions } from "./UserPermissions";
import { api } from "@/services/api";
import { useFetch } from "@/hooks/useFetch";
import { usePost } from "@/hooks/usePost";

export const EmployeeRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});

  const handleNext = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async(data: any) => {
    const finalData = { ...formData, ...data };
    console.log("send form", finalData);
    try {
      const response = await api.post('/cadastro',{
          name: finalData.username,
          cpf: finalData.cpf,
          crf: finalData.crf,
          email: finalData.email,
          cargo: finalData.role,
          role: finalData.permissionType
      })

      console.log(response)
    } catch (error) {
      console.log('error: ', error)  
    }
    
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex w-full max-w-3xl gap-6 pb-20">
        <article className="flex flex-col w-1/3 items-center justify-center">
          <p className={step === 1 ? ("text-neutral-400 font-semibold") : ("text-neutral-300 font-normal")}>
            1. Login de usuarios
          </p>
          <Progress value={step === 1 ? 100 : 0} />
        </article>
        <article className="flex flex-col w-1/3 items-center justify-center">
          <p className={step === 2 ? ("text-neutral-400 font-semibold") : ("text-neutral-300 font-normal")}>
            2. Dados
          </p>
          <Progress value={step === 2 ? 100 : 0} />
        </article>
        <article className="flex flex-col w-1/3 items-center justify-center">
          <p className={step === 3 ? ("text-neutral-400 font-semibold") : ("text-neutral-300 font-normal")}>
            3. Permissões
          </p>
          <Progress value={step === 3 ? 100 : 0} />
        </article>
      </div>

      <div className="flex w-full justify-center">
        {step === 1 && <UserLogin onNext={handleNext} />}
        {step === 2 && (
          <UserData onNext={handleNext} onPrevious={handlePrevious} />
        )}
        {step === 3 && (
          <UserPermissions onNext={handleSubmit} onPrevious={handlePrevious} />
        )}
      </div>
    </div>
  );
};
