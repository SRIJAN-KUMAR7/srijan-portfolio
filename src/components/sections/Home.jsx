import { RevealOnScroll } from "../RevealOnscroll.jsx";
import myImage from "../../assets/profile1.jpg";
import Typewriter from "typewriter-effect";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black text-white"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-center px-8 md:px-16 gap-12 w-full">
  
  {/* Left-side: Image + Icons in vertical column */}
  <div className="flex flex-col items-center">
    {/* Circular Image */}
    <div className="w-64 h-64 md:w-120 md:h-120 rounded-full overflow-hidden border-4 border-teal-500 animate-float shadow-lg">
      <img
        src={myImage}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Social Media Icons */}
    <div className="flex space-x-6 mt-4 justify-center">
      <a href="https://github.com/SRIJAN-KUMAR7" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-3xl text-white hover:text-blue-400 transition duration-200" />
      </a>
      <a href="https://www.linkedin.com/in/srijan-kumar-a780b9246/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-3xl text-white hover:text-blue-400 transition duration-200" />
      </a>
      <a href="https://www.instagram.com/srijan_72004/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-3xl text-white hover:text-blue-400 transition duration-200" />
      </a>
    </div>
  </div>

          

          {/* Right-side Content */}
          <div className="text-left space-y-6 max-w-2xl">
            {/* Name with Green Gradient */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right whitespace-nowrap">
              Hi, I'm Srijan <span>Kumar</span>
            </h1>

            {/* Typing Text Animation */}
            <div className="text-2xl md:text-4xl font-bold text-white-400 font-mono">
              <Typewriter
                options={{
                  strings: [
                    "#FULL STACK DEVELOPER",
                    "#AI/ML ENTHUSIAST",
                    "#OPEN SOURCE CONTRIBUTOR",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            {/* Short Description */}
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer dedicated to building clean, scalable, and high-performing web applications. 
              <br></br>I strive to create solutions that not only work flawlessly but also provide an intuitive and enjoyable user experience.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
               <a
                href="#about"
                className="bg-blue-500 text-white py-3 px-6 rounded font-semibold transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
              >
                About
              </a>
              <a
                href="#projects"
                className="border border-blue-500/60 text-blue-400 py-3 px-6 rounded font-semibold transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:bg-green-500/10"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/60 text-blue-400 py-3 px-6 rounded font-semibold transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:bg-green-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
