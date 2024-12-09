"use client";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const AdminPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter()
  const logout = async () => {
    try {
      await signOut({
        redirect: false,
        
      });
      router.push("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  if (status === "authenticated") {
    return (
      <>
        <p>Seja bem-vindo, {session.user?.email}!</p>
        <Link className="w-full" href="/nova-senha">
          <Button>Nova Senha</Button>
        </Link>

        <Link className="w-full ml-2" href="/usuarios">
          <Button>Usuários</Button>
        </Link>

        <Link className="w-full ml-2" href="/cadastro-usuario">
          <Button>Cadastro de usuário</Button>
        </Link>

        <Link className="w-full ml-2" href="/">
          <Button onClick={logout}>Terminar sessão</Button>
        </Link>
      </>
    );
  }

  return <p>Você não está autorizado a visualizar esta página!</p>;
};

export default AdminPage;
