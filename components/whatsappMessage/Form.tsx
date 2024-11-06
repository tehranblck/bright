"use client";
import React, { useCallback, useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FormMessageProps {
  onClose: () => void;
  className?: string;
}

const FormMessage: React.FC<FormMessageProps> = ({ onClose, className }) => {
  const [userMessage, setUserMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Bileşen ilk yüklendiğinde görünür yapmak için küçük bir gecikme
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Kapanma animasyonu
    setTimeout(onClose, 300); // Animasyon süresi kadar bir gecikme ile bileşeni kapat
  };

  const sendToWhatsApp = useCallback(() => {
    if (userMessage.trim() === "") return;
    const encodedMessage = encodeURIComponent(userMessage);
    const phoneNumber = "+905513954420";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  }, [userMessage]);

  return (
    <div
      className={`flex flex-col fixed right-2 bottom-3 z-50 w-[90%] max-w-md h-[45%] sm:h-[70%] md:h-[500px] bg-[#343541] rounded-lg text-white transition-all duration-300 ease-in-out transform ${isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        } ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full h-12 px-3 border-b border-[#2E2F3A]">
        <a className="text-[#6B6C7B] text-lg sm:text-xl cursor-pointer">WhatsApp</a>
        <div
          onClick={handleClose}
          className="w-8 h-8 flex items-center justify-center text-[#6B6C7B] cursor-pointer"
        >
          <IoIosArrowDown className="text-2xl" />
        </div>
      </div>

      {/* Mesaj Kutusu */}
      <div className="flex-1 w-full bg-[#232323] p-4 overflow-y-auto">
        <div className="relative bg-[#2E2F3A] text-sm sm:text-base p-3 mb-4 rounded-lg max-w-[80%] text-left text-white">
          Merhaba. Size nasıl yardımcı olabiliriz?
          <span className="absolute left-[-5px] top-3 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-[#2E2F3A]" />
        </div>
      </div>

      {/* Mesaj Yazma Alanı */}
      <div className="flex items-center w-full h-12 px-3 bg-[#40414F] border-t border-[#2E2F3A]">
        <div className="flex items-center bg-[#40414F] border border-[#2E2F3A] rounded-lg w-full h-10 px-2">
          <input
            type="text"
            placeholder="Mesajınızı yazın"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            className="flex-grow text-xs sm:text-sm md:text-base bg-transparent text-white outline-none"
          />
          <div
            onClick={sendToWhatsApp}
            className="flex items-center justify-center w-8 h-8 cursor-pointer"
          >
            <svg
              className="w-5 h-5 text-[#6B6C7B]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <path
                    fill="#6B6C7B"
                    d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808 L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193 c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409 C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormMessage;
