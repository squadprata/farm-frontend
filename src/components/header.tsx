import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="container mx-auto mt-6 mb-10 px-20">
      <nav className="flex items-center justify-between">
        <Link className="font-bold text-2xl" href="/">
          FarmApp
        </Link>
        <ul className="flex gap-6 justify-center flex-grow">
          <li>
            <Link href="/funcionalidades">Funcionalidades</Link>
          </li>
          <li>
            <Link href="/quem-somos">Quem somos</Link>
          </li>
          <li>
            <Link href="/fale-conosco">Fale conosco</Link>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <Link href="/login">Login</Link>
          <Button className="rounded-full py-4 px-6 bg-customGray-400 hover:bg-customGray-900">
            <Link href="/cadastro">Cadastre-se</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
