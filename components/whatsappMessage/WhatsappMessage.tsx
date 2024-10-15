"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

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
    setMessageVisible(false);
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
    <div className="fixed bottom-4 right-4 z-50">
      {messageVisible && (
        <div
          className="bg-green-500 text-white rounded-lg shadow-lg p-4 flex items-center space-x-4 cursor-pointer"
          onClick={openForm}
        >
          <Image src="/whatsapp.png" alt="WhatsApp" width={30} height={30} className="rounded-full" />
          <div className="text-sm">
            <p className="font-semibold">WhatsApp</p>
            <p>Salam! Sizə necə kömək edə bilərik?</p>
          </div>
        </div>
      )}

      {showForm && (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg w-80">
          <div className="flex items-center bg-green-600 text-white rounded-t-lg px-4 py-2">
            <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="rounded-full" />
            <p className="ml-2 font-semibold">WhatsApp Support</p>
            <button onClick={closeMessage} className="ml-auto font-bold">×</button>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 text-gray-800 rounded-lg p-3 mb-4">
              Salam! Sizə necə kömək edə bilərik?
            </div>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Mesajınızı yazın..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            ></textarea>
            <div className="flex justify-end mt-2">
              <button onClick={sendToWhatsApp} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                Göndər
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppMessage;
