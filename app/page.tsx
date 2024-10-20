import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
// import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team/Team";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bright Academy",
  description: "Bright Academy'yə Xoş Gəlmisiniz.",
};


export default function Home() {
  return (
    <>
      {/* <ScrollUp /> */}
      <Hero />
      <AboutSectionOne />
      <Features />
      {/* <Video /> */}
      <Brands />
      <Team textParagraph='Müəllim hərşeydir.' loadmore={true}/>
      <Testimonials button={true} text={''}/>
      <Pricing/>
      {/* <Alumni/> */}
      <Blog />
      <Contact />
    </>
  );
}
