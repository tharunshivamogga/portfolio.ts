import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skills.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? skills
      : skills.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack & Toolkit</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Skills & Technical Proficiency
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A comprehensive overview of the frameworks, languages, databases, and development tooling I utilize on a daily basis.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                    : darkMode
                    ? 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/40">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {group.category}
                </h3>
                <span className="text-xs font-mono font-medium text-indigo-400 px-2.5 py-1 rounded-md bg-indigo-500/10">
                  {group.skills.length} skills
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-transform hover:-translate-y-0.5 ${
                      darkMode
                        ? 'bg-slate-950/40 border-slate-800/80 hover:border-indigo-500/40'
                        : 'bg-slate-50/80 border-slate-200/80 hover:border-indigo-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-400" />
                      <span className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className={`text-xs px-2 py-0.5 rounded font-mono ${
                        skill.level === 'Expert' || skill.level === 'Advanced'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : skill.level === 'Proficient'
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
