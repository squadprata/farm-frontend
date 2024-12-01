"use client";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const AdminPage = () => {
  const { data: session, status } = useSession();

  const logout = async () => {
    try {
      await signOut({
        callbackUrl: "/",
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
            Usuários
          </Button>
        </Link>

        <Link className="w-full ml-2" href="/cadastro-usuario">
          <Button>
            Cadastro de usuário
          </Button>
        </Link>

        <Link className="w-full ml-2" href="/">
          <Button onClick={logout}>
            Terminar sessão
          </Button>
        </Link>
      </>
    ) 
  }

  return <p>You are not authorized to view this page!</p>;
};

export default AdminPage;
