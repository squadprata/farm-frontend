"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";

const AdminPage = () => {
  const { data: session, status } = useSession();

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

        <Link className="w-full ml-2" href="/">
          <Button>
            Terminar sessão
          </Button>
        </Link>
      </>
    ) 
  }

  return <p>You are not authorized to view this page!</p>;
};

export default AdminPage;
