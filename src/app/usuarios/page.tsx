import { SessionProvider } from "next-auth/react"
import Fields from "./components/fields"

const UsuariosPage = () => {

  return (
    <SessionProvider>
      <Fields />
    </SessionProvider>
  )
}

export default UsuariosPage