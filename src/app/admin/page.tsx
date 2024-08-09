"use client";
import { useSession } from "next-auth/react";

const AdminPage = () => {
  const { data: session, status } = useSession();

  if (session) {
    return <p>Welcome, {session.user?.email}!</p>;
  }

  return <p>You are not authorized to view this page!</p>;
};

export default AdminPage;
