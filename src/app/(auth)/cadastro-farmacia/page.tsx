"use client";

import { SessionProvider } from "next-auth/react"
import { CadastroFarmacia } from "./components"

const ResisterFarmPage = () => {
  return (
    <SessionProvider>
      <CadastroFarmacia />
    </SessionProvider>
  )
}

export default ResisterFarmPage;
