"use client"
import React, { useState } from 'react';
import { mdiLinkedin, mdiTwitter, mdiInstagram } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Nərgiz Allahverdiyeva',
    title: 'İngilis dili təlimçisi',
    image: '/images/team/nergiz.jpg',
  },
  {
    name: 'Elvira Ocaxquliyeva',
    title: 'Rus dili  təlimçisi',
    image: '/images/team/elvira.jpg',
  },
  {
    name: 'Nərmin Cəfərova',
    title: 'İngilis dili təlimçisi',
    image: '/images/team/nermin.jpg',
  },
  {
    name: 'Tehran Bayramov',
    title: 'Front-end developer / təlimçi',
    image: '/images/blog/Tehran.jpg',
  },
  {
    name: 'Səbinə Hümbətova',
    title: 'İngilis dili təlimçisi',
    image: '/images/team/sebine.jpg',
  },
  {
    name: 'Sevinc Məmmədova',
    title: 'İngilis dili təlimçisi',
    image: '/images/team/sevinc.jpg',
  },
 
  {
    name: 'Leyla Həsənova',
    title: 'Rus dili təlimçisi',
    image: '/images/team/leyla.jpg',
  },
 
  {
    name: 'Aysel Quliyeva',
    title: 'İspan dili təlimçisi',
    image: '/images/team/aysel.jpg',
  },

];

const Team = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 4);

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent py-48">
      <div className="flex flex-col">
        <div className="flex flex-col mt-8">
          <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-black dark:text-white text-4xl font-bold mb-8">Müəllim Heyətimiz</h1>
                <p className="text-gray-700 text-lg font-light">Müəllim hər şeydir</p>
              </div>
            </div>

            <div className="flex flex-wrap">
              {visibleMembers.map((member, index) => (
                <div key={index} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <Image
                        width={300}
                        height={300}
                        className="rounded-full hover:scale-110 w-64 h-64 bg-gray-800 object-cover drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={member.image}
                        alt={`${member.name} - ${member.title}`}
                      />
                    </a>
                    <div className="text-center mt-6">
                      <h1 className="text-white text-xl font-bold mb-1">{member.name}</h1>
                      <div className="text-gray-700 font-light mb-2">{member.title}</div>
                      <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                          <Icon path={mdiLinkedin} size={1} className="text-indigo-500 mx-auto mt-2" />
                        </a>
                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                          <Icon path={mdiTwitter} size={1} className="text-blue-300 mx-auto mt-2" />
                        </a>
                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                          <Icon path={mdiInstagram} size={1} className="text-orange-400 mx-auto mt-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                {showAll ? 'Daha Az Göstər' : 'Daha Çox Göstər'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
