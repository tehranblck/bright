import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bright Academy |Dil kurslarımız və özümüz haqqında",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="Haqqımızda" description="" />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;