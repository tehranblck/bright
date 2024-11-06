import AboutSectionOne from "@/components/About/Portfolio";
// import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produck - İçerik Üretim Ajansı",
  description: "ProduckVideo İçerik ve Sosyal Medya Ajansı",
  icons: {
    icon: '/logo.svg'
  }
};


export default function Home() {
  return (
    <>
      {/* <ScrollUp /> */}
      <Hero />
      <AboutSectionOne />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <Team textParagraph='Müəllim hərşeydir.' loadmore={true} /> */}
      <Testimonials button={true} text={''} />
      {/* <Pricing /> */}
      {/* <Alumni/> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
