"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { usePathname } from "next/navigation";

const Features = () => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [isCourses, setIsCourses] = useState<boolean>(false);
  const path = usePathname();

  // Eğer kurslar sayfasındaysanız, tüm özellikleri gösterin
  useEffect(() => {
    if (path === "/kurslar") {
      setIsCourses(true);
      setHidden(false);  // Bu sayede tüm özellikler gösterilir
    }
  }, [path]);

  const dataToShow = hidden ? featuresData.slice(0, 3) : featuresData;

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle title="Kurslarımız" paragraph="" center />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {dataToShow.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>

          {/* Button Section */}
          <div className="flex justify-center mt-8">
            {/* Eğer kurslar sayfasında değilsek butonu göster */}
            {!isCourses && (
              <button
                onClick={() => setHidden(!hidden)}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                {hidden ? "Daha Çox Göstər" : "Daha Az Göstər"}
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
