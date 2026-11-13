import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Mail, Sparkles, Phone, MapPin, Layers, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const { personal } = portfolioData;

  const quickTech = [
    'Python (Flask)',
    'SQL & MySQL',
    'React.js',
    'JavaScript',
    'Data Analysis',
    'Web Technologies',
    'Pytest',
    'Tailwind CSS'
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/25 via-purple-500/15 to-cyan-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-4 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-4 w-[350px] h-[350px] bg-purple-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5 transition-transform hover:scale-105 border shadow-sm backdrop-blur-md cursor-default select-none animate-fade-in
          bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{personal.availability}</span>
        </div>

        {/* Location & Contact info line */}
        <div className={`flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
            {personal.location}
          </span>
          <span>•</span>
          <a href={personal.social.phone} className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            {personal.phone}
          </a>
          <span>•</span>
          <span className="inline-flex items-center gap-1 text-purple-400 font-semibold">
            <Award className="w-3.5 h-3.5" />
            B.E. Computer Science (8.2 CGPA)
          </span>
        </div>

        {/* Main Title & Role */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5">
          <span className={darkMode ? 'text-white' : 'text-slate-900'}>
            Hi, I'm{' '}
          </span>
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
            {personal.name}
          </span>
          <br />
          <span className={`text-xl sm:text-3xl lg:text-4xl font-bold mt-2 block ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            {personal.role}
          </span>
        </h1>

        {/* Tagline */}
        <p className={`max-w-3xl mx-auto text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {personal.tagline}
        </p>

        {/* Featured 4 Ribbon Callout */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono mb-10 border backdrop-blur-sm bg-indigo-500/10 border-indigo-500/20 text-indigo-300">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>Core Projects: CardShare • BrickOps APK • PMK Bricks • Shuttering Web</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:opacity-95 shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border transition-all transform hover:-translate-y-0.5 cursor-pointer ${
              darkMode
                ? 'bg-slate-900/80 hover:bg-slate-800 text-white border-slate-700 shadow-md'
                : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-sm'
            }`}
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact Tharun</span>
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
            <span>Developer CLI</span>
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
        <div className="pt-6 border-t border-slate-800/40 max-w-3xl mx-auto">
          <p className={`text-xs uppercase tracking-widest font-semibold mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Skills & Core Toolchain
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {quickTech.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  darkMode
                    ? 'bg-slate-900/80 text-slate-300 border border-slate-700/60 hover:border-cyan-400/60 hover:text-cyan-300'
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
