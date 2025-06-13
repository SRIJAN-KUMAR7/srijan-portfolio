import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, go, liveUrl, tech }) => {
  return (
    <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all h-full">
      {/* Image container with hover effect */}
      <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          src={src}
          alt={title}
        />
      </div>
      
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{des}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((technology, index) => (
          <span 
            key={index}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
          >
            {technology}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <a 
            href={go} 
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="text-lg" /> GitHub
          </a>
          {liveUrl && (
            <a 
              href={liveUrl} 
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe className="text-lg" /> Live
            </a>
          )}
        </div>
        <span className="text-blue-400">→</span>
      </div>
    </div>
  );
}

export default ProjectsCard;