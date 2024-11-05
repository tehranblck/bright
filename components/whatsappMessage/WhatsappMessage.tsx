"use client";
import { useEffect, useState, useCallback } from "react";
import Card from "./MessageLittle";
import FormMessage from "./Form";
import './style.css';
import BadgeComponent from "./Badge";

const WhatsAppMessage: React.FC = () => {
  const [messageVisible, setMessageVisible] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [badge, setBadge] = useState<boolean>(false);

  // Mesajın görünmesini sağlamak için 3 saniyelik zamanlayıcı
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openForm = useCallback(() => {
    setShowForm(true);
    setMessageVisible(false);
    setBadge(false); // Form açıldığında badge görünmez olsun
  }, []);

  const closeForm = useCallback(() => {
    setShowForm(false);
    setBadge(true); // Form kapandığında badge görünür olsun
  }, []);

  const handleBadgeClick = useCallback(() => {
    openForm(); // Badge tıklanınca formu yeniden aç
  }, [openForm]);

  return (
    <div className="fixed z-40 container mx-auto bottom-4 right-4 md:bottom-6 md:right-6  max-w-fit">
      {/* Kart görünüyorsa göster */}
      {messageVisible && (
        <Card onClick={openForm} className="w-56 sm:w-64 md:w-72" /> // Mobil için genişlik ayarı
      )}

      {/* Form görünüyorsa göster */}
      {showForm && (
        <FormMessage onClose={closeForm} className="w-full max-w-xs sm:max-w-sm md:max-w-md" />
      )}

      {/* Form kapandığında veya küçültüldüğünde Badge görünür */}
      {badge && (
        <BadgeComponent onClick={handleBadgeClick} className="w-12 h-12 sm:w-14 sm:h-14" />
      )}
    </div>
  );
};

export default WhatsAppMessage;
