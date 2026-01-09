import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { Bio } from "../Data/Constant";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdFileDownload } from "react-icons/md";
import { Link } from "react-scroll";
import Design from "../design/Design";

import { motion } from "framer-motion";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  // GSAP intro animation
  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <Design />
       
      <section
        ref={heroRef}
        name="Home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16"
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6"
        >
          {/* DEV STYLE HELLO */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          
            <span className="text-gray-700">"Hello"</span>
            <br />
            I’m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {Bio.name}
            </span>
          </h1>

          {/* ROLES */}
          <h2 className="text-xl md:text-2xl font-semibold text-blue-600">
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 dark:text-gray-300 max-w-xl">
            I build modern, scalable web applications with clean UI,
            smooth animations, and performance-focused architecture.
            Passionate about frontend, MERN stack, and user experience.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-6 text-3xl">
            {[FaGithub, FaLinkedin, FaXTwitter].map((Icon, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer text-gray-700 hover:text-blue-600"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 pt-6">
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-lg"
              >
                Contact Me <RiContactsBook3Line />
              </motion.button>
            </Link>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-lg shadow-lg"
            >
              Get Resume <MdFileDownload />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <motion.img
            src="/image/Homepage.png"
            alt="Hero"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-72 md:w-96 drop-shadow-2xl"
          />
        </motion.div>
      </section>
    </>
  );
}
