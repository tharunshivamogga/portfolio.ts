import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t transition-colors ${
        darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className={`font-mono text-lg font-bold tracking-tight inline-block mb-1 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {personal.name}
              <span className="text-cyan-400">.dev</span>
            </a>
            <p className="text-xs">
              © {new Date().getFullYear()} {personal.name} • Bengaluru, India. All rights reserved.
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:text-white hover:bg-slate-800' : 'hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:text-white hover:bg-slate-800' : 'hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.social.email}
              aria-label="Email"
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:text-white hover:bg-slate-800' : 'hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personal.social.phone}
              aria-label="Phone"
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'hover:text-emerald-400 hover:bg-slate-800' : 'hover:text-emerald-600 hover:bg-slate-200'
              }`}
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono hidden sm:inline-block">
              Python • SQL • Web Technologies • Data Analysis
            </span>
            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl border transition-all transform hover:-translate-y-0.5 cursor-pointer ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'bg-white border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100 shadow-sm'
              }`}
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
