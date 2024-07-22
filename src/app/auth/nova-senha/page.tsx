import { Button } from "@/components/ui/button";
import { Login } from "./_components";

const LoginPage = () => {
  return (
    <div className="container mx-auto mt-6 mb-10 px-20 ">
      <Button className="outline outline-1 outline-offset-1 outline-gray-400 rounded-full">
        <span className="ml-3 font-bold text-xl">sair</span>
      </Button>
      <div className="flex justify-center items-center h-screen">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
