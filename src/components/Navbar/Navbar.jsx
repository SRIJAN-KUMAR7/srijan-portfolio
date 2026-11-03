import React, { useState, useEffect, useCallback } from 'react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { MobileOverlay } from './MobileOverlay';
import { SOCIAL_LINKS } from './navConfig';

export const Navbar = ({ menuOpen: externalMenuOpen, setMenuOpen: externalSetMenuOpen }) => {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Sync internal and external menu states if passed from parent
  const isMenuOpen = externalMenuOpen !== undefined ? externalMenuOpen : internalMenuOpen;
  const setIsMenuOpen = useCallback((value) => {
    if (externalSetMenuOpen) {
      externalSetMenuOpen(value);
    }
    setInternalMenuOpen(value);
  }, [externalSetMenuOpen]);

  // Handle scroll state for navbar background and border
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bulletproof scroll locking for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        const parsedY = parseInt(scrollY || '0', 10) * -1;
        window.scrollTo(0, parsedY);
      }
    }
  }, [isMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, setIsMenuOpen]);

  // IntersectionObserver to accurately track active section
  useEffect(() => {
    const sectionIds = ['home', 'work', 'projects', 'experience', 'achievements', 'swag', 'about', 'contact'];
    const observedElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (observedElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let activeId = entry.target.id;
            if (activeId === 'projects') activeId = 'work';
            setActiveSection(activeId);
          }
        });
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0.1,
      }
    );

    observedElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler that maps alias IDs gracefully
  const handleNavigate = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');

    // Map targets to existing or created anchors
    let element = document.getElementById(targetId);
    if (!element && targetId === 'work') {
      element = document.getElementById('projects');
    }
    if (!element && (targetId === 'experience' || targetId === 'achievements')) {
      element = document.getElementById('about');
    }
    if (!element && targetId === 'swag') {
      element = document.getElementById('projects') || document.getElementById('about');
    }

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      let canonicalId = targetId;
      if (canonicalId === 'projects') canonicalId = 'work';
      setActiveSection(canonicalId);
    } else {
      window.location.hash = href;
    }

    setIsMenuOpen(false);
  };

  // Resume handler
  const handleResumeClick = () => {
    // Check if resume.pdf exists or show modal
    fetch(SOCIAL_LINKS.resume, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          window.open(SOCIAL_LINKS.resume, '_blank', 'noopener,noreferrer');
        } else {
          setShowResumeModal(true);
        }
      })
      .catch(() => {
        setShowResumeModal(true);
      });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07080b]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-3'
            : 'bg-transparent border-b border-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <DesktopNav
            activeSection={activeSection}
            onNavigate={handleNavigate}
            onResumeClick={handleResumeClick}
          />
          <MobileNav
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen(!isMenuOpen)}
            onNavigate={handleNavigate}
          />
        </div>
      </header>

      {/* Full-screen Mobile Navigation Overlay */}
      <MobileOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onResumeClick={handleResumeClick}
      />

      {/* Non-intrusive Resume Information Modal (shown if resume.pdf is not yet in public/) */}
      {showResumeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowResumeModal(false)}
        >
          <div
            className="w-full max-w-md p-6 bg-[#0e1017] border border-white/15 rounded-xl shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                  Resume Connection
                </span>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="text-zinc-400 hover:text-white font-mono text-xs px-2 py-1"
              >
                [ESC]
              </button>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              The Resume link is configured to serve{' '}
              <code className="text-cyan-300 bg-white/[0.06] px-1.5 py-0.5 rounded font-mono text-xs">
                public/resume.pdf
              </code>
              . Add your PDF file to the project's{' '}
              <code className="text-cyan-300 bg-white/[0.06] px-1.5 py-0.5 rounded font-mono text-xs">
                public/
              </code>{' '}
              folder to enable one-click direct viewing & downloading.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-4 py-2 text-xs font-mono font-medium rounded-md bg-white/[0.08] hover:bg-white/[0.15] text-white transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

