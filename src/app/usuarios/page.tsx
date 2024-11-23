import { SessionProvider } from 'next-auth/react'
import Fields from './components/fields'

const UsuarioPage = () => {
  return (
    <SessionProvider>
      <Fields />
    </SessionProvider>
  )
}
export default UsuarioPage