import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, FolderGit2, Star, Zap } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<string>('All');

  const filterOptions = ['All', 'Full-Stack', 'Backend & APIs', 'Frontend / UI'];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-pink-400 bg-pink-500/10 border border-pink-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Production Software & Projects
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A selection of full-stack web applications, microservices, and developer tools built with scalable patterns.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === opt
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/20'
                    : darkMode
                    ? 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 group ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10'
                  : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-slate-200/60'
              }`}
            >
              <div className="p-6 sm:p-7">
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Star className="w-3 h-3 fill-amber-400" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className={`text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className={`text-sm leading-relaxed mb-5 line-clamp-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {project.description}
                </p>

                {/* Metric pill if present */}
                {project.metrics && (
                  <div className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-mono mb-5 border ${
                    darkMode
                      ? 'bg-slate-950/60 text-emerald-400 border-slate-800'
                      : 'bg-slate-50 text-emerald-600 border-slate-200'
                  }`}>
                    <Zap className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.metrics}</span>
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                        darkMode
                          ? 'bg-slate-800/60 text-slate-300'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className={`p-4 px-6 sm:px-7 border-t flex items-center justify-between ${
                darkMode ? 'border-slate-800/80 bg-slate-950/20' : 'border-slate-100 bg-slate-50/50'
              }`}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                    darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
