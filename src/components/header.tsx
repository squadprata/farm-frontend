import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="container mx-auto px-6 py-6">
      <nav className="flex items-center justify-between">
        <Link className="font-bold text-2xl" href="/">
          FarmApp
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/login">Login</Link>
          <Button className="rounded-full bg-stone-500">
            <Link href="/cadastro">Cadastre-se</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
