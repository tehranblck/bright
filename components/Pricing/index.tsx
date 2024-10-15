"use client";
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

// Qiymət detalları üçün tip təyini
type QiymetDetallari = {
  qiymet: number[];
  ilkin: number[];
};

type QiymetSeçimləri = {
  [mövzu: string]: {
    [dil: string]: {
      [müddət: string]: QiymetDetallari;
    };
  };
};

const Pricing = () => {
  const [mövzu, setMövzu] = useState<string>("Dillər");
  const [dil, setDil] = useState<string>("İngilis");

  // Mövcud qiymət seçimləri
  const qiymetSeçimləri: QiymetSeçimləri = {
    Dillər: {
      İngilis: {
        "3ay": { qiymet: [100, 250, 400], ilkin: [120, 300, 480] },
        "6ay": { qiymet: [180, 450, 720], ilkin: [240, 600, 960] },
        illik: { qiymet: [300, 750, 1200], ilkin: [360, 900, 1440] },
      },
      Rus: {
        "3ay": { qiymet: [120, 270, 420], ilkin: [150, 330, 510] },
        "6ay": { qiymet: [200, 470, 740], ilkin: [260, 620, 980] },
        illik: { qiymet: [320, 780, 1250], ilkin: [400, 975, 1560] },
      },
      Alman: {
        "3ay": { qiymet: [130, 280, 440], ilkin: [160, 340, 530] },
        "6ay": { qiymet: [210, 480, 760], ilkin: [280, 640, 1020] },
        illik: { qiymet: [330, 790, 1300], ilkin: [440, 1050, 1730] },
      },
      Fransız: {
        "3ay": { qiymet: [110, 260, 430], ilkin: [140, 320, 530] },
        "6ay": { qiymet: [190, 460, 730], ilkin: [260, 610, 950] },
        illik: { qiymet: [310, 770, 1230], ilkin: [400, 990, 1580] },
      },
    },
    "Front-end": {
      Ümumi: {
        "1ay": { qiymet: [60, 160, 250], ilkin: [80, 200, 320] },
        "3ay": { qiymet: [90, 230, 350], ilkin: [110, 280, 420] },
        "6ay": { qiymet: [150, 400, 620], ilkin: [210, 520, 780] },
      },
    },
  };

  // Mövzu dəyişdikdə uyğun dil təyin edilməsi
  useEffect(() => {
    const mövcudDillər = Object.keys(qiymetSeçimləri[mövzu]);
    if (!mövcudDillər.includes(dil)) {
      setDil(mövcudDillər[0]);
    }
  }, [mövzu, dil]);

  // Qiymət məlumatlarını almaq üçün funksiya
  const qiymetAl = (müddət: string, indeks: number) => {
    return (
      qiymetSeçimləri[mövzu]?.[dil]?.[müddət]?.qiymet?.[indeks]?.toString() ||
      ""
    );
  };

  const ilkinQiymetAl = (müddət: string, indeks: number) => {
    return (
      qiymetSeçimləri[mövzu]?.[dil]?.[müddət]?.ilkin?.[indeks] || ""
    );
  };

  return (
    <section id="qiymetler" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Qiymətlərimiz"
          paragraph="Dil və paket seçiminə uyğun qiymətləri görmək üçün dil və mövzunu seçin."
          center
          width="665px"
        />

        <div className="w-full flex justify-center mb-4">
          {["Dillər", "Front-end"].map((mövzuSeçim) => (
            <button
              key={mövzuSeçim}
              onClick={() => setMövzu(mövzuSeçim)}
              className={`${
                mövzu === mövzuSeçim
                  ? "text-white bg-primary"
                  : "text-primary bg-gray-200"
              } px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 mx-2 transition-all duration-200`}
            >
              {mövzuSeçim}
            </button>
          ))}
        </div>

        {mövzu === "Dillər" && (
          <div className="w-full flex justify-center mb-8">
            {["İngilis", "Rus", "Alman", "Fransız"].map((dilSeçim) => (
              <button
                key={dilSeçim}
                onClick={() => setDil(dilSeçim)}
                className={`${
                  dil === dilSeçim
                    ? "text-white bg-primary"
                    : "text-primary bg-gray-200"
                } px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 mx-2 transition-all duration-200`}
              >
                {dilSeçim}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={qiymetAl(
              mövzu === "Dillər" ? "3ay" : "1ay",
              0
            )}
            duration={mövzu === "Dillər" ? "3ay" : "1ay"}
            subtitle="Lite paket: Asan başlanğıc üçün."
          >
            <div className="text-gray-500 line-through">
              ₼
              {ilkinQiymetAl(
                mövzu === "Dillər" ? "3ay" : "1ay",
                0
              )}
            </div>
            <OfferList text="Bütün UI Komponentləri" status="active" />
            <OfferList text="Məhdud Layihələrlə İstifadə" status="active" />
            <OfferList text="Email Dəstəyi" status="active" />
            <OfferList text="Ömür Boyu Giriş" status="inactive" />
            <OfferList text="Ömür Boyu Yeniləmələr" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Basic"
            price={qiymetAl(
              mövzu === "Dillər" ? "6ay" : "3ay",
              1
            )}
            duration={mövzu === "Dillər" ? "6ay" : "3ay"}
            subtitle="Basic paket: Əsas funksiyalar üçün."
          >
            <div className="text-gray-500 line-through">
              ₼
              {ilkinQiymetAl(
                mövzu === "Dillər" ? "6ay" : "3ay",
                1
              )}
            </div>
            <OfferList text="Bütün UI Komponentləri" status="active" />
            <OfferList text="Limitsiz Layihələrlə İstifadə" status="active" />
            <OfferList text="Email Dəstəyi" status="active" />
            <OfferList text="Kommersial İstifadə" status="active" />
            <OfferList text="Ömür Boyu Yeniləmələr" status="inactive" />
          </PricingBox>

          <PricingBox
            packageName="Plus"
            price={qiymetAl(
              mövzu === "Dillər" ? "illik" : "6ay",
              2
            )}
            duration={mövzu === "Dillər" ? "il" : "6ay"}
            subtitle="Plus paket: Ən tam funksiyalarla."
          >
            <div className="text-gray-500 line-through">
              ₼
              {ilkinQiymetAl(
                mövzu === "Dillər" ? "illik" : "6ay",
                2
              )}
            </div>
            <OfferList text="Bütün UI Komponentləri" status="active" />
            <OfferList text="Limitsiz Layihələrlə İstifadə" status="active" />
            <OfferList text="Email və Telefon Dəstəyi" status="active" />
            <OfferList text="Ömür Boyu Giriş" status="active" />
            <OfferList text="Ömür Boyu Yeniləmələr" status="active" />
          </PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
