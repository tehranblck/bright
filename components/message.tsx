"use client";
import { useState, useEffect } from "react";

export default function Message() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Hoş Geldiniz!</h1>
      {showMessage && (
        <div className="message">
          Sitede bir dakikadır bulunuyorsunuz. Yardımcı olabilir miyim?
        </div>
      )}
    </div>
  );
}
