import { SessionProvider, useSession } from "next-auth/react"
import { EmployeeRegistration } from "./components"

const EmployeeRegistrationPage = () => {
 
  return (
    <SessionProvider>
      <EmployeeRegistration />
    </SessionProvider>
  );
};

export default EmployeeRegistrationPage;
