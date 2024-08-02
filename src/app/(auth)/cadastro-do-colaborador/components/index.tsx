"use client";

import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { UserLogin } from "./UserLogin";

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

  const handleSubmit = (data: any) => {
    const finalData = { ...formData, ...data };
    console.log("Final Data:", finalData);
    // Aqui você pode enviar os dados para a API
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full gap-6">
        <Progress value={step === 1 ? 100 : 0} />
        <Progress value={step === 2 ? 100 : 0} />
        <Progress value={step === 3 ? 100 : 0} />
      </div>

      <div className="flex">
        {step === 1 && <UserLogin onNext={handleNext} />}
      </div>
    </div>
  );
};
