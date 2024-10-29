"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { usePathname } from "next/navigation";

const Features = () => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [isCourses, setIsCourses] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false); // Animasyonun sadece bir kez çalışmasını kontrol eden state
  const path = usePathname();

  // Eğer kurslar sayfasındaysanız, tüm özellikleri gösterin
  useEffect(() => {
    if (path === "/kurslar") {
      setIsCourses(true);
      setHidden(false); // Bu sayede tüm özellikler gösterilir
    }
  }, [path]);

  const dataToShow = hidden ? featuresData.slice(0, 3) : featuresData;

  // Framer Motion animation controls
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.9 });

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true); // Animasyon bir kez tetiklendikten sonra yeniden çalışmaması için
    }
  }, [controls, inView, hasAnimated]);

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <SectionTitle title="Kurslarımız" paragraph="" center />
          </motion.div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {dataToShow.map((feature, index) => (
              <motion.div
                key={feature.id}
                animate={controls}
                initial="hidden"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
                transition={{ delay: index * 0.2 }} // 0.2 saniye aralıklarla görünmesini sağlar
              >
                <SingleFeature feature={feature} />
              </motion.div>
            ))}
          </div>

          {/* Button Section */}
          <motion.div
            className="flex justify-center mt-6"
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
          >
            {/* Eğer kurslar sayfasında değilsek butonu göster */}
            {!isCourses && (
              <button
                onClick={() => setHidden(!hidden)}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                {hidden ? "Daha Çox Göstər" : "Daha Az Göstər"}
              </button>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Features;
