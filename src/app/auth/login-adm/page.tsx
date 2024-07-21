import { Button } from "@/components/ui/button";
import { Login } from "./components";
import { ArrowLeft01Icon } from "hugeicons-react";

const LoginPage = () => {
  return (
    <div className="container mx-auto mt-6 mb-10 px-20">
      <Button className="outline outline-1 outline-gray-400 rounded-full">
        <ArrowLeft01Icon size={24} />
        <span className="ml-3 font-bold text-xl">Voltar</span>
      </Button>

      <div className="flex justify-center items-center h-screen">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
