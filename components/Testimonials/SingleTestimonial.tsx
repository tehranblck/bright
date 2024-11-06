import { useState } from "react";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content } = testimonial;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const ratingIcons = Array.from({ length: star }, (_, index) => (
    <span key={index} className="text-yellow">
      {starIcon}
    </span>
  ));

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp min-h-[300px] rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className={`mb-8 ${isExpanded ? "min-h-[auto]" : "min-h-[120px]"} border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white`}>
          “{isExpanded ? content : content.slice(0, 100) + (content.length > 100 ? "..." : "")}
        </p>
        {content.length > 100 && (
          <button onClick={toggleExpanded} className="text-blue-500 hover:underline">
            {isExpanded ? "Gizle" : "Devamını Gör"}
          </button>
        )}
        <div className="flex items-center mt-4">
          <div className="relative mr-4 h-[50px] w-[50px] overflow-hidden rounded-full">
            <Image src={image} alt={name} layout="fill" objectFit="cover" />
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
