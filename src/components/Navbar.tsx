import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, Sun, Moon, Terminal as TerminalIcon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Experience & Education', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'terminal', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group font-mono text-lg font-bold tracking-tight"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <TerminalIcon className="w-5 h-5" />
            </div>
            <span className={darkMode ? 'text-white' : 'text-slate-900'}>
              {portfolioData.personal.name}
              <span className="text-indigo-500">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.href.substring(1)
                    ? darkMode
                      ? 'text-indigo-400 bg-indigo-500/10'
                      : 'text-indigo-600 bg-indigo-50'
                    : darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controls & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl transition-all cursor-pointer ${
                darkMode
                  ? 'text-yellow-400 hover:bg-slate-800'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Resume / Contact Button */}
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:opacity-95 shadow-md shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl ${
                darkMode ? 'text-yellow-400 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl ${
                darkMode ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-800 hover:bg-slate-100'
              }`}
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className={`lg:hidden px-4 pt-2 pb-6 border-b transition-all ${
            darkMode ? 'bg-slate-950/95 border-slate-800' : 'bg-white/95 border-slate-200'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-base font-medium ${
                  darkMode
                    ? 'text-slate-200 hover:bg-slate-800'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center px-4 py-2.5 rounded-xl font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
