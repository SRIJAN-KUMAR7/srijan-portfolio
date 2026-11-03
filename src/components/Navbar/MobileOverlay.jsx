import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowUpRight, FiX, FiFileText } from 'react-icons/fi';
import { NAV_ITEMS, SOCIAL_LINKS } from './navConfig';

// Uppercase alias to satisfy eslint varsIgnorePattern
const Motion = motion;

export const MobileOverlay = ({
  isOpen,
  onClose,
  activeSection,
  onNavigate,
  onResumeClick,
}) => {
  const closeButtonRef = useRef(null);

  // Auto-focus the close button when opened for accessible keyboard navigation
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.08,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.15 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          id="mobile-nav-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#07080b]/98 backdrop-blur-2xl text-white px-5 sm:px-8 py-5 sm:py-6 overflow-y-auto"
        >
          {/* Subtle Ambient Background Gradients */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Bar: Brand + Close Button */}
          <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <a
              href="#home"
              onClick={(e) => {
                onNavigate(e, '#home');
              }}
              className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
            >
              <div className="relative flex items-center justify-center w-7 h-7 rounded-md bg-white/[0.04] border border-white/10">
                <span className="font-mono text-xs font-bold text-white tracking-wider">
                  SK
                </span>
                <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold tracking-tight text-white">
                    Srijan Kumar
                  </span>
                  <span className="font-mono text-[9px] text-zinc-500 tracking-wider">
                    /dev
                  </span>
                </div>
              </div>
            </a>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close navigation menu"
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.05] hover:bg-white/[0.1] active:scale-95 border border-white/15 text-zinc-300 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span className="font-mono text-xs font-medium tracking-wider uppercase">
                Close
              </span>
              <FiX className="text-base text-cyan-400" />
            </button>
          </div>

          {/* Middle: Editorial Category & Staggered Navigation Items */}
          <div className="relative z-10 my-auto py-6 sm:py-8">
            {/* Monospace Editorial Label */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="font-mono text-[11px] tracking-widest uppercase text-cyan-400/90 font-medium">
                00 // NAVIGATION
              </span>
            </div>

            {/* Navigation List */}
            <Motion.nav
              aria-label="Mobile primary navigation"
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col space-y-1"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Motion.div key={item.id} variants={itemVariants}>
                    <a
                      href={item.href}
                      onClick={(e) => onNavigate(e, item.href)}
                      className="group flex items-center justify-between py-3 sm:py-3.5 border-b border-white/[0.06] hover:border-white/[0.15] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded-sm"
                    >
                      <div className="flex items-baseline gap-3.5 sm:gap-5">
                        {/* Monospace Section Number */}
                        <span
                          className={`font-mono text-xs tracking-wider transition-all duration-200 ${
                            isActive
                              ? 'text-cyan-400 font-bold'
                              : 'text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5'
                          }`}
                        >
                          {item.number} /
                        </span>

                        {/* Section Name */}
                        <span
                          className={`text-2xl sm:text-3xl font-semibold tracking-tight transition-all duration-200 ${
                            isActive
                              ? 'text-white translate-x-1'
                              : 'text-zinc-300 group-hover:text-white group-hover:translate-x-1'
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>

                      {/* Micro-interaction Arrow */}
                      <div className="flex items-center">
                        <FiArrowUpRight
                          className={`text-lg sm:text-xl transition-all duration-200 ${
                            isActive
                              ? 'text-cyan-400 opacity-100 translate-x-0'
                              : 'text-zinc-600 opacity-40 group-hover:opacity-100 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                          }`}
                        />
                      </div>
                    </a>
                  </Motion.div>
                );
              })}
            </Motion.nav>
          </div>

          {/* Bottom: Socials + Resume + Editorial Metadata */}
          <Motion.div
            variants={footerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 pt-4 border-t border-white/[0.08]"
          >
            {/* Quick Actions Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
              <button
                onClick={onResumeClick}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/[0.04] hover:bg-cyan-500/[0.08] border border-white/10 hover:border-cyan-400/40 text-xs font-mono font-medium text-zinc-200 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="View Resume"
              >
                <FiFileText className="text-cyan-400 text-sm" />
                <span>Resume</span>
              </button>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono font-medium text-zinc-200 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <FaGithub className="text-zinc-300 text-sm" />
                <span>GitHub</span>
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono font-medium text-zinc-200 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <FaLinkedin className="text-[#38bdf8] text-sm" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Editorial Metadata Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/[0.04] gap-1">
              <span>Software Engineer • AI Builder</span>
              <span className="text-zinc-600">NIT Jamshedpur • 2023–2027</span>
            </div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};
