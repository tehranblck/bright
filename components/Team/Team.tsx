"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { teamMembers } from './teamData';
import Link from 'next/link';

interface TeamProps {
  loadmore: boolean;
  textParagraph?: string;
}

const Team: React.FC<TeamProps> = ({ loadmore, textParagraph }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const visibleMembers = teamMembers

  const toggleExpand = (index: number) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent py-36">
      <div className="flex flex-col">
        <div className="flex flex-col mt-8">
          <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-black dark:text-white text-4xl font-bold mb-8">Müəllim Heyətimiz</h1>
                <p className="text-gray-700 text-lg font-light">{textParagraph}</p>
              </div>
            </div>

            <div className="flex flex-wrap">
              {visibleMembers.map((member, index) => (
                <div key={index} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <Link href="#" className="mx-auto">
                      <Image
                        width={300}
                        height={300}
                        className="rounded-full hover:scale-110 w-64 h-64 bg-gray-800 object-cover drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={member.image}
                        alt={`${member.name} - ${member.title}`}
                      />
                    </Link>
                    <div className="text-center mt-6">
                      <h1 className="text-white text-xl font-bold mb-1">{member.name}</h1>
                      <div className="text-gray-700 font-light mb-2">{member.title}</div>
                      <div className="text-center">
                        <button
                          onClick={() => toggleExpand(index)}
                          className="text-blue-500 underline mt-2 cursor-pointer"
                        >
                          {expandedIndexes.includes(index) ? 'Daha az' : 'Daha çox'}
                        </button>
                        <div
                          className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                            expandedIndexes.includes(index) ? 'max-h-40' : 'max-h-0'
                          }`}
                        >
                          <p className="text-gray-500 mt-3">
                            {expandedIndexes.includes(index) && (member.about)
                              }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {loadmore && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  {showAll ? 'Daha Az Göstər' : 'Daha Çox Göstər'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
