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
      className={`flex shake bounce flex-col gap-2 w-[90%] md:w-[500px] sm:w-[70%]  p-4 fixed right-2 bottom-0 sm:right-2 sm:bottom-2 text-xs sm:text-sm md:text-md z-50 ${className}`}
      onClick={onClick}
    >
      <div className="info-alert cursor-pointer flex items-center justify-between p-3 sm:p-4 w-full h-fit rounded-lg bg-[#232531]">
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
          {/* Mesaj Metni */}
          <div>
            <p className="text-white text-xs sm:text-sm md:text-lg">1 Mesajınız var...</p>
            <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm">
              Mesajı görmek için tıklayın...
            </p>
          </div>
        </div>
        {/* Kapatma Butonu */}
        <button className="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
