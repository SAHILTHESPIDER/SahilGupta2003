import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm(); // Add `reset` here
  
  const onSubmit = async (data) => {
    const userInfo = {
      Name: data.Name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post('https://getform.io/f/aqooopna', userInfo);
      toast("Your message has been sent");
      reset(); 
    } catch (error) {
      console.log("Error sending message:", error);
      toast("Error sending message");
    }
  };

  return (
    <div name="Contact" className="flex justify-center items-center min-h-screen p-10">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex w-full max-w-4xl">
        
        {/* Left Section with Title and Social Media Links */}
        <div className="w-1/3 pr-6 text-white flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
            <p className="text-gray-400 mb-6">
              Let's get in touch! Feel free to reach out to discuss potential projects, collaborations, or any questions you may have.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Connect with Me</h2>
            <div className="flex space-x-4 text-xl">
              <a href="https://linkedin.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section with Contact Form */}
        <div className="w-2/3 pl-6 flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
            <input
              {...register("Name", { required: "Name is required" })}
              type="text"
              placeholder="Enter your name"
              className="bg-gray-700 text-white p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.Name && <span className="text-red-500 text-sm">{errors.Name.message}</span>}

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Please enter a valid email address"
                }
              })}
              type="email"
              placeholder="Enter your email"
              className="bg-gray-700 text-white p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

            <textarea
              {...register("message", { required: "Message is required" })}
              rows="4"
              placeholder="Write your message"
              className="bg-gray-700 text-white p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}

            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-400 transition duration-300 w-1/2 self-center"
            >
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}
