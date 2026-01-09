import React from 'react'
import { IoMdContact } from "react-icons/io";
import { Bio } from '../Data/Constant';
export default function About() {
  return (
  <>
    <div name="About" className="h-screen flex flex-col z-30  items-center justify-start">
  <div className="w-full text-center flex justify-center">
    <h1 className="text-4xl font-bold mt-8 flex"><IoMdContact className='mt-2 text-3xl' />About Me</h1>
  </div>
  
  <div className="w-full p-4 ">
    {/* Other content goes here */}
    <p className="text-gray-700 text-lg">
    </p>
  </div>

      <div className=" shadow-lg rounded-lg w-3/4 p-6 bg-slate-900 flex items-center">
        {/* Image Section */}
        <div className="flex-shrink-0 z-30">
          <img
            src="../image/sahil.jpg" // replace with actual image link
            alt="Profile"
            className="rounded-lg w-44 h-46 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="ml-8 p-6  rounded-lg bg-slate-950 z-30">
          <h2 className="text-3xl text-white  font-bold mb-2">I'm Sahil</h2>
          <h3 className="text-blue-500 font-semibold mb-4">Full Stack Developer</h3>
          <p className="text-white mb-4">
            I am a Full-Stack developer based in Mumbai, India. I am an Bachelor of Computer Application undergraduate from Kksu. 
            I am very passionate about improving my coding skills and developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.
          </p>
          <div className="mb-4">
            <p>
              <span className="font-bold text-white">Email:</span> <a href="mailto:sahilgupta9594@gmail.com" className="text-blue-600">sahilgupta9594@gmail.com</a>
            </p>
            <p className='flex'>
              <span className="font-bold text-white">Place:</span> <p className='text-white ml-1'>Navi Mumbai, India</p>
            </p>
          </div>

          {/* Resume Button */}
          <a
            href={Bio.resume}
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  </>
  )
}
