"use client";

import { SessionProvider } from "next-auth/react";
import { RegisterAdmCard } from "./components";

const ResisterAdmPage = () => {
  return (
    <SessionProvider>
      <RegisterAdmCard />
    </SessionProvider>
  )
};

export default ResisterAdmPage;
