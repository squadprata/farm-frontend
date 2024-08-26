"use client";

import { Index } from "./components";

const newPasswordPage = ({ params }: { params: { email: string } }) =>{
    // converte o email pois ao recebelo da URL o caracter "@" é mudado para "%40"
    const convertedEmail = params.email.replace("%40", "@")
    
    return <Index email={convertedEmail}/>;
}
export default newPasswordPage;