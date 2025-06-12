import React from "react";
import myImage from "../../assets/profile1.jpg";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white px-4 pt-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-around gap-3 w-full max-w-7xl">
        
        {/* Profile Image & Social Icons - LEFT SIDE */}
        <div className="flex flex-col items-center gap-4">
          {/* Bigger Circular Image */}
          <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-teal-500 animate-float shadow-lg">
            <img
              src={myImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-2 justify-center">
            <a
              href="https://github.com/SRIJAN-KUMAR7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl sm:text-3xl hover:text-blue-400 transition duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/srijan-kumar-a780b9246/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl sm:text-3xl hover:text-blue-400 transition duration-200" />
            </a>
            <a
              href="https://www.instagram.com/srijan_72004/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl sm:text-3xl hover:text-blue-400 transition duration-200" />
            </a>
          </div>
        </div>

        {/* Text Content - RIGHT SIDE */}
        <div className="text-center md:text-left space-y-6 max-w-2xl ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Srijan <span>Kumar</span>
          </h1>

          <div className="text-lg sm:text-xl md:text-3xl font-bold font-mono text-white">
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

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
            I'm a passionate full-stack developer dedicated to building clean,
            scalable, and high-performing web applications. 
            <br></br>I strive to create solutions that not only work flawlessly but also provide an intuitive and enjoyable user experience.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            {/* <a
              href="#about"
              className="bg-blue-500 text-white py-3 px-6 rounded font-semibold transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
            >
              About
            </a> */}
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-semibold transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
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
    </section>
  );
};
