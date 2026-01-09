import React from 'react';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export default function Project() {
  return (
    <>
      <div className="min-h-screen  py-10">
        {/* Title */}
        <div className="flex justify-center mb-8">
          <h1 className="text-4xl text-white font-semibold flex items-center space-x-2">
            <AiOutlineFundProjectionScreen className="text-5xl" /> 
            <span>Projects</span>
          </h1>
        </div>

        {/* Project Cards Container */}
        <div name="Projects" className="flex flex-wrap justify-center gap-6 px-6">
          
          {/* Project Card */}
          {[
            { title: 'Bookstore', description: 'A curated collection of books from around the world, conveniently located near Barceloneta Beach.', readmore:'https://github.com/SAHILTHESPIDER/BookStore', image: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
            { title: 'Portfolio', description: 'A showcase of projects and skills, featuring modern design and a user-friendly layout.', image: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
            { title: 'Quiz App', description: 'A fun, interactive quiz app where users can test their knowledge across various topics.',readmore:'https://github.com/SAHILTHESPIDER/Quiz-Game-1', image: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' },
            { title: 'E-commerce', description: 'A sleek online shopping experience, offering a variety of products with a smooth checkout process.',readmore:'', image: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' }
          ].map((project, index) => (
            <div key={index} className="w-80 bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex flex-col justify-between">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-5">{project.description}</p>
                <a href={project.readmore} className="w-full btn bg-blue-600 py-2 text-sm rounded-md shadow-md transition hover:bg-black text-white">Read more</a>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}
