import React from 'react';
import { skills } from '../Data/Constant';
import { MdComputer } from "react-icons/md";

export default function Skills() {
  return (
    <div name="Skills" className="flex justify-center items-center min-h-screen  p-10">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center w-full max-w-6xl">
        
        {/* Section Title */}
        <h2 className="text-white text-4xl flex items-center font-bold mb-8">
          <MdComputer className="mt-1 mx-2" />
          Skills & Abilities
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          
          {skills[0]?.skills.length === 0 ? (
            <p className="text-white text-xl col-span-full text-center">No skills available at the moment.</p>
          ) : (
            skills[0]?.skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
              >
                
                {/* Skill Icon */}
                <div className="bg-blue-500 rounded-full p-4 mb-4">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-12 h-12"
                  />
                </div>
                
                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
