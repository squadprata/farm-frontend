"use client";

import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { UserLogin } from "./UserLogin";
import { UserData } from "./UserData";
import { UserPermissions } from "./UserPermissions";

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
    console.log("send form", finalData);
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex w-full max-w-3xl gap-6 pb-20">
        <Progress value={step === 1 ? 100 : 0} />
        <Progress value={step === 2 ? 100 : 0} />
        <Progress value={step === 3 ? 100 : 0} />
      </div>

      <div className="flex w-full justify-center">
        {step === 1 && <UserLogin onNext={handleNext} />}
        {step === 2 && (
          <UserData onNext={handleNext} onPrevious={handlePrevious} />
        )}
        {step === 3 && (
          <UserPermissions onNext={handleNext} onPrevious={handlePrevious} />
        )}
      </div>
    </div>
  );
};
