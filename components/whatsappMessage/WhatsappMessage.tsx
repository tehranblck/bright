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
    <div className="fixed max-w-fit container mx-auto bottom-4 right-4 z-50">
      {/* Kart görünüyorsa göster */}
      {messageVisible && <Card onClick={openForm} />}

      {/* Form görünüyorsa göster */}
      {showForm && <FormMessage onClose={closeForm} />}

      {/* Form kapandığında veya küçültüldüğünde Badge görünür */}
      {badge && <BadgeComponent onClick={handleBadgeClick} />}
    </div>
  );
};

export default WhatsAppMessage;
