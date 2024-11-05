"use client";
import React from "react";
import Image from "next/image";

interface CardProps {
  onClick: () => void;
  className: string;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div
      className="flex shake bounce flex-col gap-2 w-60 fixed right-4 bottom-2 sm:w-72 text-[10px] sm:text-xs z-50"
      onClick={onClick}
    >
      <div className="info-alert  cursor-pointer  flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
        <div className="flex gap-2">
          <div className="text-[#1c56be] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
            <Image src="/whatsapp.png" alt="whatsapp icon" width={40} height={40} className="rounded-full" />
          </div>
          <div>
            <p className="text-white">1 Mesajınız var...</p>
            <p className="text-gray-500">Mesajı görmek için tıklayın...</p>
          </div>
        </div>
        <button className="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
