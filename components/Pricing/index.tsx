"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [duration, setDuration] = useState("3months");
  const [language, setLanguage] = useState("English");

  const pricingOptions = {
    English: {
      "3months": [100, 250, 400],
      "6months": [180, 450, 720],
      yearly: [300, 750, 1200],
    },
    Russian: {
      "3months": [120, 270, 420],
      "6months": [200, 470, 740],
      yearly: [320, 780, 1250],
    },
    German: {
      "3months": [130, 280, 440],
      "6months": [210, 480, 760],
      yearly: [330, 790, 1300],
    },
    French: {
      "3months": [110, 260, 430],
      "6months": [190, 460, 730],
      yearly: [310, 770, 1230],
    },
  };

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Qiymətlərimiz"
          paragraph="Dil və müddətə uyğun paketləri seçin."
          center
          width="665px"
        />

        <div className="w-full flex justify-center mb-8">
          {["English", "Russian", "German", "French"].map((lang) => (
            <span
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`${
                language === lang ? "text-primary font-bold" : "text-dark"
              } cursor-pointer mx-2`}
            >
              {lang}
            </span>
          ))}
        </div>

        <div className="w-full mb-8 flex justify-center">
          <span
            onClick={() => setDuration("3months")}
            className={`${
              duration === "3months"
                ? "pointer-events-none text-primary"
                : "text-dark dark:text-white"
            } mr-4 cursor-pointer text-base font-semibold`}
          >
            3 Aylıq
          </span>
          <div
            onClick={() => setDuration("6months")}
            className={`${
              duration === "6months"
                ? "pointer-events-none text-primary"
                : "text-dark dark:text-white"
            } mx-4 cursor-pointer text-base font-semibold`}
          >
            6 Aylıq
          </div>
          <span
            onClick={() => setDuration("yearly")}
            className={`${
              duration === "yearly"
                ? "pointer-events-none text-primary"
                : "text-dark dark:text-white"
            } ml-4 cursor-pointer text-base font-semibold`}
          >
            İllik
          </span>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={pricingOptions[language][duration][0]}
            duration={duration === "yearly" ? "yr" : duration === "6months" ? "6mo" : "3mo"}
            subtitle="Lite paket: Asan başlanğıc üçün."
          >
            <OfferList text="All UI Components" status="active" />
            <OfferList text="Use with Limited Projects" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Lifetime Access" status="inactive" />
            <OfferList text="Free Updates" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={pricingOptions[language][duration][1]}
            duration={duration === "yearly" ? "yr" : duration === "6months" ? "6mo" : "3mo"}
            subtitle="Basic paket: Əsas funksiyalar üçün."
          >
            <OfferList text="All UI Components" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Commercial Use" status="active" />
            <OfferList text="Free Updates" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={pricingOptions[language][duration][2]}
            duration={duration === "yearly" ? "yr" : duration === "6months" ? "6mo" : "3mo"}
            subtitle="Plus paket: Ən tam funksiyalarla."
          >
            <OfferList text="All UI Components" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Email & Phone Support" status="active" />
            <OfferList text="Lifetime Access" status="active" />
            <OfferList text="Free Lifetime Updates" status="active" />
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
