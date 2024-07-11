import React from "react";

interface FeaturesOptimizeProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export const FeaturesOptimize: React.FC<FeaturesOptimizeProps> = ({
  title,
  description,
  imageUrl,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`flex flex-col max-w-full justify-center ${
          reverse
            ? "lg:ml-20 text-center lg:text-start items-center lg:items-start"
            : "items-center text-center lg:text-start lg:items-start"
        }`}
      >
        <span className="text-[32px] sm:text-[40px] font-bold">{title}</span>
        <span className="text-lg sm:text-xl lg:text-2xl font-semibold pt-4 max-w-full">
          {description}
        </span>
      </div>
      <div className="hidden lg:block h-[400px] w-full">
        <img
          className="h-full w-full object-cover rounded"
          src={imageUrl}
          alt={title}
        />
      </div>
    </div>
  );
};
