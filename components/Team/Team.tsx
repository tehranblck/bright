import React from 'react';
import { mdiLinkedin, mdiTwitter, mdiInstagram } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Tranter Jaskulski',
    title: 'Founder & Specialist',
    image: '/images/blog/Tehran.jpg',
  },
  {
    name: 'Denice Jagna',
    title: 'Tired & M. Specialist',
    image: '/images/blog/Tehran.jpg',
  },
  {
    name: 'Kenji MiltsSon',
    title: 'Team Member',
    image: '/images/blog/Tehran.jpg',
  },
  {
    name: 'Tehran Bayramov',
    title: 'Front-end Trainer',
    image: '/images/blog/Tehran.jpg',
  },
];

const Team = () => {
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
              {teamMembers.map((member, index) => (
                <div key={index} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <Image
                        width={500}
                        height={500}
                        className="rounded-full object-cover drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={member.image}
                        alt={`${member.name} - ${member.title}`} // Improved alt text
                      />
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">{member.name}</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
