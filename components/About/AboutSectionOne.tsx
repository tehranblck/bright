"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Loader from "./Cubic";
import AnimatedDiv from "../Animated";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false); // Animasyonun tekrar çalışmaması için
  const { ref, inView } = useInView({
    threshold: 0.5, // %50 görünür olduğunda animasyon tetiklenir
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true); // İlk çalışmada animasyon tamamlanır ve bir daha tetiklenmez
    }
  }, [controls, inView, hasAnimated]);

  const List = ({ text }) => (
    <motion.p
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="mb-5 flex items-center text-lg font-medium text-body-color"
    >
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </motion.p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <AnimatedDiv animationType="slideY">
                <motion.div
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                  }}
                >
                  <SectionTitle
                    title="Haqqımızda"
                    paragraph="Bright Academy 2017-ci ildə təsis olunub.
Bright Academy sosial məsuliyyətli davamlığa əsaslanan təşəbbüslər vasitəsilə Azərbaycan cəmiyyətinin innovativ, interaktiv metodlarla xarici dilin sürətli şəkildə öyrənilməsinə yönəlik yaradılmış xarici dil mərkəzidir. Biz birbaşa təsir gücünə malik vasitə kimi təhsilə əsaslanan innovativ yanaşma yolunu seçmişik. Hal-hazırda tədris mərkəzimizdə İngilis, Rus, Alman və Fransız dilləri tədris olunur.
Məqsədimiz müxtəlif dillər üzrə keyfiyyətli, etibarlı, eyni zamanda innovativ və beynəlxalq standartlara cavab verən tədris vermək, təhsilli gənclər yetişdirərək onların təhsil və iş həyatlarında uğurlu olmalarına dəstək olmaqdır."
                    mb="44px"
                  />
                </motion.div>
              </AnimatedDiv>

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Ödənişsiz sınaq dərsi" />
                    <List text="Təcrübəli müəllim heyyəti" />
                    <List text="Qrupla vəya fərdi dərs imkanı" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Danışaraq öyrənmə" />
                    <List text="Online vəya əyani dərslər" />
                    <List text="Serifikatla mükafatlandırılma" />
                  </div>
                </div>
              </div>
            </div>

            <Loader />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
