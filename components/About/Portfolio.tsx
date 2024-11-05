// components/AboutSectionOne.tsx

'use client'
import React, { useState, useEffect } from 'react';
import SectionTitle from "../Common/SectionTitle";
import VideoCard from './VideoCard';
import { videoData } from './VideoData';

const Portfolio = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [showAllVideos, setShowAllVideos] = useState(false); // Tüm videoları göstermek için durum

  const openModal = (url: string) => {
    setCurrentVideoUrl(`${url}?autoplay=1&rel=0`);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideoUrl("");
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  // Gösterilecek video sayısı (3 veya tümü)
  const videosToShow = showAllVideos ? videoData : videoData.slice(0, 3);

  return (
    <section id="portfolio" className="pt-12 md:pt-8 lg:pt-10">
      <div className="container mx-auto px-4">
        <div className="border-b border-body-color/[.15] pb-12 dark:border-white/[.15] md:pb-16 lg:pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-8">
              <SectionTitle
                title="Portfolyomuz"
                paragraph="Örnek çalışmalarımıza dair örnek videoları aşağıda izleyebilirsiniz."
                mb="8"
              />
            </div>

            {/* Video Kartları */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {videosToShow.map((video) => (
                <VideoCard key={video.id} url={video.url} openModal={openModal} />
              ))}
            </div>
          </div>

          {/* Tümünü Göster / Daha Az Göster Butonu */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllVideos(!showAllVideos)}
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition"
            >
              {showAllVideos ? "Daha Az Göster" : "Tümünü Göster"}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative w-full h-full flex flex-col">
            {/* Offset ile Navbar */}
            <div className="w-full bg-black bg-opacity-80 py-4 px-6 flex justify-between items-center" style={{ marginTop: '64px' }}>
              <span className="text-white text-lg font-semibold">Video İzleme</span>
              <button
                onClick={closeModal}
                className="text-white text-3xl font-bold hover:text-red-600"
              >
                ✕
              </button>
            </div>

            {/* Video İçeriği */}
            <div className="w-full h-full flex items-center justify-center">
              <iframe
                src={currentVideoUrl}
                title="YouTube video modal"
                className="w-full h-full"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
