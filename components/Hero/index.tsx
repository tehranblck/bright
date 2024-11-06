"use client";
import Link from "next/link";
import { FaArrowCircleDown, FaWhatsapp } from "react-icons/fa";
import AnimatedDiv from "../Animated";

const Hero = () => {
  const handleScroll = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section
        id="home"
        style={{ backgroundAttachment: "fixed" }}
        className="relative z-10 overflow-hidden bg-white pb-8 pt-32 dark:bg-gray-dark   md:pb-12 md:pt-20 xl:pb-16 xl:pt-20 2xl:pb-20 2xl:pt-28"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 text-center">
              <div style={{ width: '100%' }}
                className="wow fadeInUp mx-auto !w-full text-center flex flex-col items-center"
                data-wow-delay=".2s"
              >
                <AnimatedDiv animationType="fade">
                  <h1 className="mb-5 text-3xl text-center font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    İşinizi görselleştiriyoruz!
                  </h1>
                </AnimatedDiv>
                <AnimatedDiv animationType="fade">
                  <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                    Video, fotoğraf ve sosyal medya tasarımlarımızla işletmenizin bilinirliğini artırıyoruz.
                  </p>
                </AnimatedDiv>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <AnimatedDiv animationType="scale">
                    <Link
                      href="https://wa.me/+994704390607"
                      className="flex flex-row gap-1 rounded-sm bg-[#1c7d50] px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                      <FaWhatsapp className="text-xl" /> İletişim
                    </Link>
                  </AnimatedDiv>
                  <AnimatedDiv animationType="scale">
                    <Link
                      href="/haqqimizda"
                      className="inline-block rounded-sm bg-black px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                    >
                      Portfolyomuz
                    </Link>
                  </AnimatedDiv>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
            <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" />
            <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FF00" />
                <stop offset="1" stopColor="#00FF00" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#00FF00" stopOpacity="0" />
                <stop offset="1" stopColor="#00FF00" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#00FF00" stopOpacity="0" />
                <stop offset="1" stopColor="#00FF00" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FF00" />
                <stop offset="1" stopColor="#00FF00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FF00" />
                <stop offset="1" stopColor="#00FF00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FF00" />
                <stop offset="1" stopColor="#00FF00" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FF00" />
                <stop offset="1" stopColor="#00FF00" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
