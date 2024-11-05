// components/VideoCard.tsx

import React from 'react';

interface VideoCardProps {
  url: string;
  openModal: (url: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ url, openModal }) => {
  return (
    <div
      className="relative aspect-[16/9] w-full cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      onClick={() => openModal(url)}
    >
      {/* Video */}
      <iframe
        src={url}

        className="w-full h-full pointer-events-none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Overlay ve Başlık */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
      </div>
    </div>
  );
};

export default VideoCard;
