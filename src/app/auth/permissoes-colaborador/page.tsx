import { Button } from "@/components/ui/button";
import { Login } from "./_components";

const LoginPage = () => {
  return (
    <div className="container mx-auto mt-6 mb-10 px-20">
      <Button className="outline outline-1 outline-offset-1 outline-gray-400 rounded-full pl-4">
        <span className=" text-lg ml-[15px]">sair</span>
      </Button>
      <div className=" flex justify-center h-[66px] mt-[50px] mb-[67px] gap-2">
        <div className="">
          <div className="mb-4 text-center text-zinc-300">
            1. Login do usuário
          </div>
          <input
            className="bg-zinc-300 rounded-[80px] w-[338px] h-[24px]"
            disabled
          />
        </div>
        <div className="justify-center">
          <div className="mb-4 text-center text-zinc-300">2. Dados</div>
          <input
            className="bg-zinc-300 rounded-[80px] w-[338px] h-[24px]"
            disabled
          />
        </div>
        <div className="justify-center">
          <div className="mb-4 text-center text-zinc-700">3. Permissões</div>
          <input
            className="bg-zinc-700 rounded-[80px] w-[338px] h-[24px]"
            disabled
          />
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
