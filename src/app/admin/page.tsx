"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";

const AdminPage = () => {
  const { data: session, status } = useSession();

  if (session) {
    return(
      <>
        <p>Welcome, {session.user?.email}!</p>
        <Link className="w-full" href="/nova-senha">
          <Button>Nova Senha</Button>
        </Link>
      </>
    ) 
  }

  return <p>You are not authorized to view this page!</p>;
};

export default AdminPage;
