import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ExternalLink, FolderGit2, Star, Zap, ChevronDown, ChevronUp, Smartphone, Globe, Code2, Database } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filterOptions = [
    { id: 'All', label: 'All Projects (9)' },
    { id: 'Featured Four', label: 'Core 4 Systems' },
    { id: 'Web Technologies', label: 'Web Technologies' },
    { id: 'Python & Data Analysis', label: 'Python & Data Analysis' }
  ];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p: Project) => p.category === filter);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getCategoryIcon = (category: string, apk?: boolean) => {
    if (apk) return <Smartphone className="w-3.5 h-3.5 text-emerald-400" />;
    if (category === 'Web Technologies') return <Globe className="w-3.5 h-3.5 text-cyan-400" />;
    if (category === 'Python & Data Analysis') return <Database className="w-3.5 h-3.5 text-purple-400" />;
    return <Code2 className="w-3.5 h-3.5 text-indigo-400" />;
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Featured Projects & Real-World Systems
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Featuring our core four applications — CardShare, BrickOps Mobile APK, PMK Bricks Web, and Shuttering Web — alongside all repositories on GitHub.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === opt.id
                    ? 'bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                    : darkMode
                    ? 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className={`rounded-2xl border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2 group relative ${
                project.featured
                  ? darkMode
                    ? 'bg-slate-900/50 border-indigo-500/30 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-indigo-500/20 ring-1 ring-indigo-500/20'
                    : 'bg-white border-indigo-300 hover:border-indigo-500 hover:shadow-2xl hover:shadow-slate-300/80 ring-1 ring-indigo-200'
                  : darkMode
                  ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:shadow-xl'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl'
              }`}
            >
              <div className="p-6 sm:p-7">
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/60">
                    {getCategoryIcon(project.category, project.apkDownload)}
                    <span>{project.apkDownload ? 'Mobile Android APK' : project.category}</span>
                  </span>

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 shadow-sm">
                      <Star className="w-3 h-3 fill-amber-400" />
                      Core Project
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className={`text-lg sm:text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-indigo-400 font-medium mb-3 font-mono">
                  {project.subtitle}
                </p>

                {/* Project Description */}
                <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {project.description}
                </p>

                {/* Metric pill */}
                {project.metrics && (
                  <div className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-mono mb-4 border ${
                    darkMode
                      ? 'bg-slate-950/70 text-emerald-400 border-slate-800'
                      : 'bg-slate-50 text-emerald-600 border-slate-200'
                  }`}>
                    <Zap className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                    <span className="truncate">{project.metrics}</span>
                  </div>
                )}

                {/* Expandable Architecture Details */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-4">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className={`text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                        darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-indigo-600 hover:text-indigo-700'
                      }`}
                    >
                      <span>{expandedId === project.id ? 'Hide Details' : 'View Key Features & Impact'}</span>
                      {expandedId === project.id ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {expandedId === project.id && (
                      <ul className="mt-3 space-y-2 text-xs border-l-2 border-cyan-500/40 pl-3 pt-1 animate-fade-in">
                        {project.highlights.map((h: string, idx: number) => (
                          <li
                            key={idx}
                            className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
                          >
                            • {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                        darkMode
                          ? 'bg-slate-800/60 text-slate-300 border border-slate-700/40'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className={`p-4 px-6 sm:px-7 border-t flex items-center justify-between ${
                darkMode ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-100 bg-slate-50/60'
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
                  <span>GitHub Repository</span>
                </a>

                {project.apkDownload ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Android APK</span>
                  </span>
                ) : project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
