import React from 'react';

export const MobileNav = ({ isOpen, onToggle, onNavigate }) => {
  return (
    <div className="flex lg:hidden items-center justify-between w-full">
      {/* Mobile Brand / Monogram */}
      <a
        href="#home"
        onClick={(e) => onNavigate(e, '#home')}
        className="group flex items-center gap-2.5 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
        aria-label="Srijan Kumar - Home"
      >
        <div className="relative flex items-center justify-center w-7 h-7 rounded-md bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/50 transition-colors">
          <span className="font-mono text-[11px] font-bold text-white tracking-wider">
            SK
          </span>
          <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400"></span>
          </span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-white">
              Srijan Kumar
            </span>
            <span className="font-mono text-[9px] text-zinc-500 tracking-wider">
              /dev
            </span>
          </div>
        </div>
      </a>

      {/* Crafted Mobile MENU Trigger */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-overlay"
        aria-label="Open mobile navigation menu"
        className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 border border-white/15 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-zinc-300">
          Menu
        </span>
        <div className="flex flex-col gap-1 w-3.5" aria-hidden="true">
          <span className="h-[1.5px] w-full bg-zinc-300 rounded-full"></span>
          <span className="h-[1.5px] w-2.5 bg-cyan-400 rounded-full self-end"></span>
        </div>
      </button>
    </div>
  );
};

