'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NewPasswordsFields } from "./fields"


export const Index = ({email}:{email:string}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-center font-bold text-[32px] text-neutral-500 leading-10">
                    Crie sua nova senha 
                </CardTitle>
            </CardHeader>
            <CardContent>
                <NewPasswordsFields email={email} />
            </CardContent>
        </Card>
    )
}