"use client";
import { SessionProvider } from "next-auth/react";
import CardProfile from "./components";

const ProfilePage = ({ params }: { params: { id: string } }) => {
  return (
    <SessionProvider>
      <CardProfile params={params} />
    </SessionProvider>
  )
}

export default ProfilePage