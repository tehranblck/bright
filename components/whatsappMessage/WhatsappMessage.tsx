"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const WhatsAppMessage = () => {
  const [messageVisible, setMessageVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [alertSound, setAlertSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Audio nesnesini yalnızca istemci tarafında oluşturun
    if (typeof window !== "undefined") {
      const audio = new Audio("/message.mp3");
      setAlertSound(audio);
    }

    // Mesajı gösterme zamanlayıcısı
    const timer = setTimeout(() => {
      setMessageVisible(true);
      alertSound?.play();
    }, 3000); // 2 dakika = 120000 milisaniye

    return () => clearTimeout(timer); // Temizle
  }, [alertSound]);

  // Mesajı kapatma fonksiyonu
  const closeMessage = () => {
    setMessageVisible(false);
  };

  // Formu açma fonksiyonu
  const openForm = () => {
    setShowForm(true);
    setMessageVisible(false); // Mesajı kapat ve formu aç
  };

  // WhatsApp bağlantısı oluşturma fonksiyonu
  const sendToWhatsApp = () => {
    const encodedMessage = encodeURIComponent(userMessage);
    const phoneNumber = "+994997301998"; // Kendi numaranızı buraya ekleyin
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div style={{ position: "absolute", zIndex: "99" }}>
      {/* WhatsApp Benzeri Mesaj Bildirimi */}
      {messageVisible && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white rounded-lg shadow-lg p-4 flex items-center space-x-4 cursor-pointer"
             onClick={openForm}>
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={30}
            height={30}
            className="rounded-full"
          />
          <div className="text-sm">
            <p className="font-semibold">WhatsApp</p>
            <p>Salam! Sizə necə kömək edə bilərik?</p>
          </div>
        </div>
      )}

      {/* Mesaj Formu */}
      {showForm && (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg w-80">
          <div className="flex items-center bg-green-600 text-white rounded-t-lg px-4 py-2">
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              width={24}
              height={24}
              className="rounded-full"
            />
            <p className="ml-2 font-semibold">WhatsApp Support</p>
            <button onClick={closeMessage} className="ml-auto text-white font-bold">×</button>
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
            <div className="flex justify-end space-x-2 mt-2">
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
