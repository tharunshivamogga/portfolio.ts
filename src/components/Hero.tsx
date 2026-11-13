import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail, Sparkles, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const { personal } = portfolioData;

  const quickTech = [
    'Python (Flask)',
    'PostgreSQL',
    'SQLAlchemy',
    'React.js',
    'TypeScript',
    'Pytest',
    'Tailwind CSS',
    'REST APIs'
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[320px] h-[320px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-6 transition-transform hover:scale-105 border shadow-sm backdrop-blur-md cursor-default select-none animate-fade-in
          bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{personal.availability}</span>
        </div>

        {/* Location & Contact info line */}
        <div className={`flex items-center justify-center gap-4 text-xs sm:text-sm font-medium mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
            {personal.location}
          </span>
          <span>•</span>
          <a href={personal.social.phone} className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            {personal.phone}
          </a>
        </div>

        {/* Main Title & Role */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          <span className={darkMode ? 'text-white' : 'text-slate-900'}>
            Hi, I'm{' '}
          </span>
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {personal.name}
          </span>
          <br />
          <span className={`text-2xl sm:text-4xl lg:text-5xl font-bold mt-2 block ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            {personal.role}
          </span>
        </h1>

        {/* Tagline */}
        <p className={`max-w-3xl mx-auto text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-10 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {personal.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:opacity-90 shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>View Featured Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border transition-all transform hover:-translate-y-0.5 cursor-pointer ${
              darkMode
                ? 'bg-slate-900/80 hover:bg-slate-800 text-white border-slate-700'
                : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-sm'
            }`}
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>Get In Touch</span>
          </a>

          <a
            href="#terminal"
            className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold border transition-all transform hover:-translate-y-0.5 font-mono text-sm cursor-pointer ${
              darkMode
                ? 'bg-slate-950/60 hover:bg-slate-800/80 text-emerald-400 border-emerald-500/30'
                : 'bg-emerald-50/60 hover:bg-emerald-100 text-emerald-700 border-emerald-300 shadow-sm'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Interactive CLI</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`p-3 rounded-xl transition-all border transform hover:scale-110 ${
              darkMode
                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                : 'bg-white border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 shadow-sm'
            }`}
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`p-3 rounded-xl transition-all border transform hover:scale-110 ${
              darkMode
                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                : 'bg-white border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 shadow-sm'
            }`}
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          <a
            href={personal.social.email}
            aria-label="Direct Email"
            className={`p-3 rounded-xl transition-all border transform hover:scale-110 ${
              darkMode
                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                : 'bg-white border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 shadow-sm'
            }`}
          >
            <Mail className="w-5 h-5" />
          </a>

          <a
            href={personal.social.phone}
            aria-label="Phone Call"
            className={`p-3 rounded-xl transition-all border transform hover:scale-110 ${
              darkMode
                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-slate-700'
                : 'bg-white border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-200 shadow-sm'
            }`}
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* Quick Tech Badge Ribbon */}
        <div className="pt-6 border-t border-slate-800/40 max-w-2xl mx-auto">
          <p className={`text-xs uppercase tracking-widest font-semibold mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Primary Stack & Core Disciplines
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {quickTech.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                  darkMode
                    ? 'bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-indigo-500/50'
                    : 'bg-slate-100 text-slate-700 border border-slate-200 hover:border-indigo-400'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
