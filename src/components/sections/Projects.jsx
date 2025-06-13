import React from "react";
import ProjectsCard from "./ProjectsCard";
import p1 from "../../assets/p1.png"
import p2 from "../../assets/p2.png"
import p3 from "../../assets/P22.png"
import p4 from "../../assets/p4.png"

export const Projects = () => {
  const projects = [
    {
      title: "BioSkin-AI",
      des: "A self-healing prosthetic skin that integrates Ecoflex™ and machine learning to predict healing efficiency and peak stress. Real-time visualization via web UI and ANSYS-validated stress analysis.",
      tech: ["Python", "ML", "ANSYS", "Web Interface", "Ecoflex™", "Randomforest-Regressor"],
      go: "https://github.com/SRIJAN-KUMAR7/SHM",
      src: p1
    },
    {
      title: "Fruit-Vision",
      des: "A computer vision-based fruit classifier using OpenCV that detects and identifies fruits in real-time. Utilizes contour analysis, color segmentation, and shape features for accurate classification from camera input.",
      tech: ["Python", "OpenCV", "Computer Vision", "NumPy"],
      go: "https://github.com/Sinister-Six-SIH/Fruit_Vision",
      src: p4 
    },
    {
      title: "Real-Time Chat App-Chat Box",
      des: "A full-stack chat platform supporting real-time messaging, dynamic room creation, presence tracking. Built with React, Express, Socket.IO, and Websockets.",
      tech: ["Socket.IO", "Express", "React", "TailwindCSS"],
      go: "https://github.com/SRIJAN-KUMAR7/chat-app",
      src: p3
    },
    {
      title: "Ayush's Portfolio Website",
      des: "Animated personal site for a BBA undergrad, built with React and Tailwind. Highlights education, skills, and projects with smooth transitions.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      go: "https://github.com/SRIJAN-KUMAR7/Ayushportfolio", 
      liveUrl: "https://ayushportfolio-bba.vercel.app/",
      src:p2 
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              des={project.des}
              src={project.src}
              tech={project.tech}
              go={project.go}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};