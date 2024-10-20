"use client";
import { usePathname } from "next/navigation";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";
import { useEffect, useState } from "react";


interface TestimonialProps{
  button:boolean;
  text?:string;

}

const Testimonials: React.FC<TestimonialProps> = ({button,text}) => {
  const path = usePathname();
  const [visible, setVisible] = useState<boolean>(true);
  const DisplayTestimonial=visible?testimonialData:testimonialData.slice(0,3)

  
  useEffect(() => {
    if (path === '/') {
      setVisible(false);
    }
  }, [path]);

  return (
    <section className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Tələbələrimizin haqqımızda düşüncələri"
          paragraph={text}
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {DisplayTestimonial.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

      <div className="flex w-full text-center items-center justify-center mt-6">
      {
        button&&(
          <button
          onClick={() => setVisible(!visible)}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors mt-4"
        >
          {visible ? "Daha Az Göstər" : "Daha Çox Göstər"}
        </button>
        )
       }
      </div>
      </div>

      {/* SVG elemanları burada kalır */}
    </section>
  );
};

export default Testimonials;
