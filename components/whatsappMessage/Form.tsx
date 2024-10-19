"use client";
import React, { useCallback, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FormMessageProps {
  onClose: () => void;
}

const FormMessage: React.FC<FormMessageProps> = ({ onClose }) => {
  const [userMessage, setUserMessage] = useState("");

  const sendToWhatsApp = useCallback(() => {
    if (userMessage.trim() === "") return; 
    const encodedMessage = encodeURIComponent(userMessage);
    const phoneNumber = "+994997301998";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  }, [userMessage]);

  return (
    <div className="flex flex-col fixed right-4 bottom-2 z-50 w-[300px] h-[320px] border border-white bg-[#343541] rounded-lg text-white">
      <div className="flex relative items-center justify-between w-full h-10 px-3">
        <a className="text-[#6B6C7B] cursor-pointer">Whatsapp</a>
        <div onClick={onClose} className="relative w-10 h-10 cursor-pointer flex justify-center items-center">
            <IoIosArrowDown />
        </div>
      </div>

      <div className="flex-1 w-full bg-[#232323] p-2">
        {/* WhatsApp tarzı mesaj kutusu */}
        <div className="relative bg-[#2E2F3A] text-sm p-2 pl-4 pr-4 mb-4 rounded-lg max-w-[80%] text-left before:absolute before:left-[-5px] before:top-3 before:w-0 before:h-0 before:border-t-[8px] before:border-t-transparent before:border-r-[8px] before:border-r-[#2E2F3A]">
          Salam sizə necə kömək edə bilərik?
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-16 px-3">
        <div className="flex items-center bg-[#40414F] border border-[#2E2F3A] rounded-lg w-full h-10">
          <input
            type="text"
            placeholder="Mesajınızı yazın"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            className="flex-grow bg-transparent text-white outline-none px-2"
          />
          <div onClick={sendToWhatsApp} className="flex items-center justify-center w-8 h-8 cursor-pointer">
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
