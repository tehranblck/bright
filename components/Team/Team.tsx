"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { teamMembers } from './teamData';
import Link from 'next/link';
import ButtonTeam from './ButtonTeam'; 
import { usePathname } from 'next/navigation';


interface TeamProps {
  loadmore: boolean;
  textParagraph?: string;
}

const Team: React.FC<TeamProps> = ({ loadmore, textParagraph }) => {
  const [showModal, setShowModal] = useState<number | null>(null);
  const [visible,setVisible]=useState<boolean>(false)
  const path=usePathname();
  console.log(path)

  useEffect(()=>{
    if(path==='/heyyet'){
      setVisible(true)
    }
  },[])

  const openModal = (index: number) => {
    setShowModal(index); 
  };

  const closeModal = () => {
    setShowModal(null); 
  };

const DisplayMembers=visible?teamMembers:teamMembers.slice(0,4)
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
              {DisplayMembers.map((member, index) => (
                <div key={index} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <Link href="#" className="mx-auto">
                      <Image
                        width={300}
                        height={300}
                        quality={95}
                        className="rounded-full hover:scale-110 w-64 h-64 bg-gray-800 object-cover drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={member.image}
                        alt={`${member.name} - ${member.title}`}
                      />
                    </Link>
                    <div className="text-center mt-6">
                      <h1 className=" text-xl dark:text-white text-black font-bold mb-1">{member.name}</h1>
                      <div className="text-gray-700 font-light mb-2">{member.title}</div>

                      {/* Show more button to open the modal */}
                      <ButtonTeam
                      
                        onClick={() => openModal(index)}
                        text="Daha Çox Göstər"
                       
                      />
                    </div>
                  </div>

                  {/* Popup modal */}
                  {showModal === index && (
                    <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50">
                      <div className="dark:bg-[#232323] bg-white rounded-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
                       
                        <h2 className="text-2xl  font-bold mb-4 text-black : dark:text-gray-200">{member.name}</h2>
                        <p className="text-gray-700 dark:text-white mb-4">{member.about}</p>
                        <ButtonTeam
                       
                          onClick={closeModal}
                          text="Bağla"
                        
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

           
                {loadmore && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setVisible(!visible)} // Butonun durumu visible state’ine göre değişir
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  {visible ? "Daha Az Göstər" : "Daha Çox Göstər"}
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
