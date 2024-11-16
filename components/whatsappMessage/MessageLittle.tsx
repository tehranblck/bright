"use client";
import React from "react";
import Image from "next/image";

interface CardProps {
  onClick: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ onClick, className }) => {
  return (
    <div
      className={`flex shake bounce flex-col gap-2 w-fit md:w-fit sm:w-fit  p-4 fixed right-2 bottom-0 sm:right-2 sm:bottom-2 text-xs sm:text-sm md:text-md z-50 ${className}`}
      onClick={onClick}
    >
      <div className="info-alert cursor-pointer flex items-center justify-between p-3 sm:p-4 w-full h-fit rounded-lg ">
        <div className="flex items-center gap-3">
          {/* Görsel */}
          <div className="text-[#1c56be] bg-white/5 flex backdrop-blur-xl p-1 rounded-lg">
            <Image
              src="/whatsapp.png"
              alt="whatsapp icon"
              width={100} // Küçük ekranlar için boyut
              height={100} // Küçük ekranlar için boyut
              className="rounded-full md:w-[60px] "
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Card;
