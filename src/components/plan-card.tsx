import React from "react";

interface PlanCardProps {
  recommended?: boolean;
  planName: string;
  price: string;
  installments: string;
  upfrontPrice: string;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  recommended,
  planName,
  price,
  installments,
  upfrontPrice,
}) => {
  return (
    <div className="sm:max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="text-gray-400 text-center">
        {recommended && "Recomendado"}
      </div>
      <div className="p-6 h-full">
        <h2 className="text-2xl font-bold text-gray-800">{planName}</h2>
        <div className="flex items-center justify-between mt-2">
          <span className="text-2xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600">{installments}</span>
        </div>
        <p className="text-gray-500 mt-1">ou {upfrontPrice} à vista</p>
      </div>
      <div className="bg-gray-100 text-gray-500 text-center text-sm py-2">
        assinatura renovada automaticamente
      </div>
    </div>
  );
};
