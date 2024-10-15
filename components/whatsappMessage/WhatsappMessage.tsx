"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const WhatsAppMessage = () => {
  const [messageVisible, setMessageVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  // Kullanıcı sayfada 2 dakika kalırsa mesajı göster
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageVisible(true);
    }, 3000); // 2 dakika = 120000 milisaniye

    return () => clearTimeout(timer); // Temizle
  }, []);

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
    const phoneNumber = "1234567890"; // Buraya kendi telefon numaranızı ekleyin
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div style={{position:'absolute',zIndex:'99'}}>
      {/* WhatsApp Benzeri Mesaj Bildirimi */}
      {messageVisible && (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 flex items-center space-x-4">
          <Image
            src="/whatsapp.png" // WhatsApp ikonunuz
            alt="WhatsApp"
            width={30}
            height={30}
            className="rounded-full"
          />
          <div className="text-sm">
            <p className="font-semibold text-gray-800">WhatsApp</p>
            <p className="text-gray-600">Merhaba! Size nasıl yardımcı olabilirim?</p>
          </div>
          <button onClick={openForm} className="ml-auto text-gray-500 hover:text-gray-700">
            Yanıtla
          </button>
        </div>
      )}

      {/* Mesaj Formu */}
      {showForm && (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-80 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Yanıtla</h3>
          <p className="text-sm text-gray-600">Merhaba! Size nasıl yardımcı olabilirim?</p>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Mesajınızı yazın..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          ></textarea>
          <div className="flex justify-end space-x-2">
            <button onClick={closeMessage} className="text-gray-500 hover:text-gray-700">
              Kapat
            </button>
            <button onClick={sendToWhatsApp} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Gönder
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppMessage;
