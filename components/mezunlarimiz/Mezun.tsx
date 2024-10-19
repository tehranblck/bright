import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { alumniData } from './MezunData';

// Swiper-in müştəri tərəfində render olunması üçün dinamik idxalı
const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), { ssr: true });
const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), { ssr: false });



const Alumni = () => {
  const settings = {
    spaceBetween: 30,
    slidesPerView: 3,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      1024: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      640: { slidesPerView: 1 },
    },
  };

  return (
    <div className="bg-gray-100 py-20">
      <h2 className="text-center text-3xl font-bold mb-10">Məzunlarımız</h2>
      <div className="container mx-auto px-8">
        <Swiper {...settings}>
          {alumniData.map((alumni, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
                <Image
                  src={alumni.image}
                  alt={alumni.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{alumni.name}</h3>
                <p className="text-gray-600 text-sm mt-2 text-center">{alumni.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Alumni;
