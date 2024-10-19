import React from 'react';
import { alumniData } from './MezunData';
import Image from 'next/image';


const Alumni = () => {
 

  return (
    <div className="bg-gray-100 py-20">
      <h2 className="text-center text-3xl font-bold mb-10">Məzunlarımız</h2>
      <div className="container mx-auto px-8">
          {alumniData.map((alumni, index) => (
            <div key={index}>
              <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6">
                <Image src={alumni.image} alt='mezun dil kursu' width={150} height={150} className="rounded-full object-cover mb-4"/>
                <h3 className="text-xl font-semibold">{alumni.name}</h3>
                <p className="text-gray-600 text-sm mt-2 text-center">{alumni.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
 
  );
};

export default Alumni;
