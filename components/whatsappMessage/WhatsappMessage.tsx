"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import './style.css';

const WhatsAppMessage = () => {
  const [messageVisible, setMessageVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closeMessage = useCallback(() => {
    setShowForm(false);
  }, []);

  const openForm = useCallback(() => {
    setShowForm(true);
    setMessageVisible(false);
  }, []);

  const sendToWhatsApp = useCallback(() => {
    const encodedMessage = encodeURIComponent(userMessage);
    const phoneNumber = "+994997301998";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  }, [userMessage]);

  return (
    <div className="fixed max-w-md container mx-auto bottom-4 right-4 z-50">
      {messageVisible && (
        <div
          className="bg-[#232323] text-white rounded-lg shadow-lg p-4 flex items-center space-x-4 cursor-pointer bounce"
          onClick={openForm}
        >
          <Image src="/whatsapp.png" alt="WhatsApp" width={70} height={70} className="rounded-full" />
          <div className="text-sm relative flex justify-between w-full items-center">
            <div className="flex flex-col w-full ">
              <p className="font-semibold text-left">WhatsApp</p>
              <p className="text-left">Salam! Sizə necə kömək edə bilərik?</p>
            </div>
            <button onClick={closeMessage} className="text-white absolute right-0 text-2xl font-bold">×</button>
          </div>
        </div>
      )}

      {showForm && (
        <div className="bg-[#232323] rounded-lg relative top-3  min-h-[300px] shadow-lg w-80">
          <div className="flex items-center text-white rounded-t-lg px-4 py-2">
            <Image src="/whatsapp.png" alt="WhatsApp" width={50} height={50} className="rounded-full" />
            <p className="ml-2 font-semibold">WhatsApp</p>
            <IoIosArrowDown onClick={closeMessage} className="ml-auto cursor-pointer text-white text-2xl font-bold">×</IoIosArrowDown>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 text-gray-800 rounded-lg p-3 mb-4">
              Salam! Sizə necə kömək edə bilərik?
            </div>
            <div className="flex items-center w-full absolute bottom-3">
              <input 
                className="flex-grow p-2 outline-none rounded-lg pr-12"
                placeholder="Mesajınızı yazın..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <button onClick={sendToWhatsApp} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-950 text-white px-2 py-1 rounded-lg hover:bg-green-600 flex items-center justify-center">
                <IoIosSend className="text-white bg-blue-950" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppMessage;
