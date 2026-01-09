import React from 'react';
import { FaBook } from "react-icons/fa";

export default function EducationTimeline() {
  return (
    <div name="Education" className="flex items-center min-h-screen p-4 sm:p-10">
      <div className="p-4 sm:p-8 rounded-lg shadow-lg flex flex-col sm:flex-row">

        {/* Left Section - Vertical Title */}
        <div className="flex items-center justify-center sm:w-1/12 w-full sm:-rotate-90 text-white mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl font-semibold flex items-center">
            <FaBook className="mr-2" /> Education
          </h1>
        </div>

        {/* Timeline and Content Section */}
        <div className="flex flex-col w-full sm:w-11/12 space-y-6 sm:ml-8">
          
          {/* Education Entry 1 */}
          <div className="relative flex items-start">
            <div className="absolute left-0 top-4 w-1 h-full bg-blue-500 hidden sm:block"></div>
            <div className="ml-0 sm:ml-8 p-4 sm:p-6 bg-white rounded-lg shadow-md w-full flex flex-col justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Kavikulaguru Kalidas Sanskrit University</h2>
              <p className="text-gray-600">Bachelor of Computer Application</p>
              <p className="text-gray-900">Shayog College</p>
              <p className="text-gray-500">2022 - 2025</p>
            </div>
          </div>

          {/* Education Entry 2 */}
          <div className="relative flex items-start">
            <div className="absolute left-0 top-4 w-1 h-full bg-blue-500 hidden sm:block"></div>
            <div className="ml-0 sm:ml-8 p-4 sm:p-6 bg-white rounded-lg shadow-md w-full flex flex-col justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Higher Secondary School Certificate</h2>
              <p className="text-gray-600">Maharashtra State Board</p>
              <p className="text-gray-900">Sainath Junior College of Commerce & Science</p>
              <p className="text-gray-500">2021</p>
            </div>
          </div>

          {/* Education Entry 3 */}
          <div className="relative flex items-start">
            <div className="absolute left-0 top-4 w-1 h-full bg-blue-500 hidden sm:block"></div>
            <div className="ml-0 sm:ml-8 p-4 sm:p-6 bg-white rounded-lg shadow-md w-full flex flex-col justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">State Secondary School Certificate</h2>
              <p className="text-gray-600">Maharashtra State Board</p>
              <p className="text-gray-900">Sainath English High School</p>
              <p className="text-gray-500">2019</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
