import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-customGray-400">
      <div className="container mx-auto py-20 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <Link className="font-bold text-2xl" href="/">
              FarmApp
            </Link>
          </div>
          <div className="text-xl font-semibold mt-4 sm:mt-0">
            <span className="cursor-pointer">Termos e Condições</span>
            <span className="cursor-pointer ml-20">Ajuda</span>
          </div>
        </div>
      </div>
    </div>
  );
};
