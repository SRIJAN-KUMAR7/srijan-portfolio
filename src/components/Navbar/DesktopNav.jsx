import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { NAV_ITEMS, SOCIAL_LINKS } from './navConfig';

export const DesktopNav = ({ activeSection, onNavigate, onResumeClick }) => {
  return (
    <div className="hidden lg:flex items-center justify-between w-full">
      {/* Brand / Logo */}
      <a
        href="#home"
        onClick={(e) => onNavigate(e, '#home')}
        className="group flex items-center gap-3 select-none text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
        aria-label="Srijan Kumar - Home"
      >
        <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/[0.06] transition-all duration-300">
          <span className="font-mono text-xs font-bold text-white tracking-wider group-hover:text-cyan-300 transition-colors">
            SK
          </span>
          {/* Technical live status indicator */}
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-cyan-100 transition-colors">
              Srijan Kumar
            </span>
            <span className="font-mono text-[10px] text-zinc-500 tracking-wider">
              /dev
            </span>
          </div>
          <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">
            AI & Software Engineer
          </span>
        </div>
      </a>

      {/* Center Navigation Links */}
      <nav aria-label="Desktop primary navigation" className="flex items-center space-x-1 xl:space-x-2">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => onNavigate(e, item.href)}
              className={`relative px-3 py-1.5 text-[12px] font-mono uppercase tracking-wider font-medium transition-all duration-200 rounded-md group focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${
                isActive
                  ? 'text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
                )}
                {item.label}
              </span>

              {/* Active subtle bottom indicator line */}
              {isActive && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              )}
            </a>
          );
        })}
      </nav>

      {/* Right Action Cluster: Resume + Socials */}
      <div className="flex items-center space-x-2">
        {/* Resume Button */}
        <button
          onClick={onResumeClick}
          className="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.05] hover:bg-cyan-500/[0.08] border border-white/10 hover:border-cyan-400/40 text-xs font-mono font-medium text-zinc-200 hover:text-white transition-all duration-200 shadow-sm hover:shadow-[0_0_14px_rgba(6,182,212,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="View Resume"
        >
          <span>Resume</span>
          <FiArrowUpRight className="text-zinc-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-sm" />
        </button>

        {/* Vertical divider */}
        <div className="h-4 w-[1px] bg-white/10 mx-1" aria-hidden="true" />

        {/* GitHub */}
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="GitHub Profile (opens in new tab)"
        >
          <FaGithub className="text-base" />
        </a>

        {/* LinkedIn */}
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-zinc-400 hover:text-[#38bdf8] hover:bg-white/[0.06] rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="LinkedIn Profile (opens in new tab)"
        >
          <FaLinkedin className="text-base" />
        </a>
      </div>
    </div>
  );
};

