"use client";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const AdminPage = () => {
  const { data: session, status } = useSession();

  const logout = async () => {
    try {
      await signOut({
        callbackUrl: "/login", // Redirecionar para uma página após o logout
      });
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  if (session) {
    return(
      <>
        <p>Seja bem vindo, {session.user?.email}!</p>
        <Link className="w-full" href="/nova-senha">
          <Button>Nova Senha</Button>
        </Link>

        <Link className="w-full ml-2" href="/usuarios">
          <Button>
            Colaboradores
          </Button>
        </Link>

        <Link className="w-full ml-2" href="/cadastro-adm">
          <Button>
            Cadastro admin
          </Button>
        </Link>

        <Link className="w-full ml-2" href="/cadastro-colaborador">
          <Button>
            Cadastro do colaborador
          </Button>
        </Link>

        <Link className="w-full ml-2" href="/cadastro-colaborador">
          <Button onClick={logout}>
            Terminar sessão
          </Button>
        </Link>
      </>
    ) 
  }

  return <p>Você não está autorizado a visualizar!</p>;
};

export default AdminPage;
