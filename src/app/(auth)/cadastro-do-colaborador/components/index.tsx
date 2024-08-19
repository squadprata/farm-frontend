"use client";

import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { UserLogin } from "./UserLogin";
import { UserData } from "./UserData";
import { UserPermissions } from "./UserPermissions";
import { Final } from "./final";
import { usePost } from "@/hooks/usePost";
import Swal from "sweetalert2";

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
    try { 
      const response = await usePost({
          endpoint:'/cadastro',
          body:{
          name: finalData.username,
          cpf: finalData.cpf,
          crf: finalData.crf,
          email: finalData.email,
          cargo: finalData.role,
          role: finalData.permissionType
          },
          headers:{
            "Content-Type": "multipart/form-data"
          }
        }
        )

      if (response.status === 201) setStep(step + 1)
        
    } catch (error:any) {
      Swal.fire({
        icon: "error",
        title: error?.response?.data?.error || "Erro",
        timerProgressBar: true,
        timer: 6000
      })
    }
    
  };

  const handleResetToNewRegister = () =>{
    setFormData({})
    setStep(1)
  };

  return (
    <div className="flex flex-col w-full items-center">
      {step != 4 &&
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
      }

      <div className="flex w-full justify-center">
        {step === 1 && <UserLogin onNext={handleNext} formData={formData} />}
        {step === 2 && (
          <UserData onNext={handleNext} onPrevious={handlePrevious} formData={formData}/>
        )}
        {step === 3 && (
          <UserPermissions onNext={handleSubmit} onPrevious={handlePrevious} />
        )}
        {step === 4 && <Final onNewRegister={handleResetToNewRegister} />}
      </div>
    </div>
  );
};
