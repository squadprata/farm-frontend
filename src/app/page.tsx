import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { FeaturesOptimize } from "@/components/features-optimize";
export default function Home() {
  return (
    <main>
      <Header />

      <div className="container mx-auto pt-20 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="flex flex-col max-w-full lg:max-w-[900px] items-center lg:items-start text-center lg:text-start">
            <span className="text-[32px] sm:text-[40px] lg:text-[56px] sm:w-[600px] font-bold items-center lg:text-left">
              Simplifique a gestão de estoques da sua farmácia
            </span>
            <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-customGray-900 pt-4 max-w-full lg:max-w-[515px] text-center lg:text-left">
              Automatize processos, reduza desperdícios e melhore a eficiência
              do seu negócio.
            </span>
            <span className="pt-8 flex justify-center lg:justify-start">
              <Button className="bg-customGray-400 hover:bg-customGray-900 rounded-full py-4 lg:py-6">
                Solicite uma demonstração
              </Button>
            </span>
          </div>
          <div className="hidden lg:block h-[400px] w-full lg:max-w-[650px]">
            <img
              className="w-full h-full object-cover rounded"
              src="/hero-farm.png"
              alt="hero-farm"
            />
          </div>
        </div>
      </div>

      <div className="bg-customGray-400 mt-7">
        <div className="container mx-auto py-20 px-6 sm:px-10 lg:px-20">
          <div className="flex flex-col text-center">
            <span className="text-[40px] font-bold">
              Descubra as funcionalidades que otimizam seu estoque
            </span>
            <span className="text-2xl font-semibold">
              Um sistema completo que te permite gerenciar seu estoque de forma
              eficiente e segura
            </span>
          </div>
          <div className="flex flex-col pt-[100px]">
            <FeaturesOptimize
              title="Controle total do seu estoque"
              description="Cadastre seus produtos, monitore os níveis de estoque em tempo real, analise os itens mais vendidos e identifique rapidamente produtos próximos do vencimento."
              imageUrl="/stock.png"
              reverse
            />
            <FeaturesOptimize
              title="Mantenha-se sempre atualizado"
              description="Receba alertas sobre produtos próximos do vencimento ou com níveis baixos de estoque, acompanhe o histórico de movimentações e obtenha relatórios detalhados de vendas."
              imageUrl="/notification.png"
            />
            <FeaturesOptimize
              title="Gestão colaborativa simplificada"
              description="Adicione colaboradores, gerencie várias farmácias com facilidade e acesse informações centralizadas para um controle mais eficiente."
              imageUrl="/manager.png"
              reverse
            />
          </div>
          <div className="text-center pt-[90px]">
            <Button className="bg-customGray-700 hover:bg-customGray-900 rounded-full py-4 lg:py-6">
              Solicite uma demonstração
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
