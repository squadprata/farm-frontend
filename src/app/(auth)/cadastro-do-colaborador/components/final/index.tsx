'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FinalProps {
    onNewRegister: () => void;
}

export const Final:React.FC<FinalProps> = ({onNewRegister}) => {
    return (
        <Card className='flex flex-col gap-4'>
            <CardHeader className='flex flex-col gap-2'>
                <CardTitle className='text-center'>
                    Cadastro concluído!
                </CardTitle>
                <CardDescription className='text-center'>
                    O colaborador receberá uma senha em seu e-mail para<br /> o primeiro acesso
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex flex-row w-full gap-2'>
                    <Button
                        className="w-1/3 text-neutral-500 bg-neutral-200 hover:bg-neutral-300 flex"
                        onClick={onNewRegister}
                    >
                        Novo cadastro
                    </Button>
                    <Link className="w-full" href="/">
                        <Button className="w-full">
                            Página inicial
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}