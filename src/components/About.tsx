import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Server, Database, Code2, Smartphone, CheckCircle2, Award, GraduationCap } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const { personal, education } = portfolioData;

  const pillars = [
    {
      icon: Server,
      title: 'Python Backend & APIs',
      description: 'Architecting clean RESTful services, transactional logic, and user authentication with Python, Flask, and SQLAlchemy.'
    },
    {
      icon: Database,
      title: 'SQL & Data Analysis',
      description: 'Designing structured SQL databases (MySQL/SQLite), crafting optimized queries, and building automated data cleaning and analysis pipelines.'
    },
    {
      icon: Code2,
      title: 'Web Technologies & UI',
      description: 'Creating high-performance, responsive web platforms and dynamic client experiences using React.js, JavaScript, modern HTML5, and Tailwind CSS.'
    },
    {
      icon: Smartphone,
      title: 'Practical Software & Mobile APKs',
      description: 'Developing end-to-end commercial solutions, offline-first mobile Android ERP APKs for industrial factories, and lead-generating business portals.'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Solid Computer Science Foundation & Real Commercial Systems
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Bridging strong academic foundations with hands-on software development across Python, SQL, Web Technologies, and Data Analysis.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Bio text column */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-8 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Practical problem solver focused on high-impact software.
              </h3>
              <p className={`leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {personal.bio}
              </p>
              <p className={`leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                My work spans designing fintech state machines with zero financial drift, building standalone Android ERP applications for daily factory logistics and piece-rate wages, creating high-converting commercial contractor websites, and developing data analysis pipelines in Python and SQL.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/40">
                {[
                  'Python & Flask REST Services',
                  'SQL Optimization & Data Pipelines',
                  'Modern Web Technologies & React',
                  'Data Analysis & Cleansing Ingestion',
                  'Offline-first Android ERP APKs',
                  'Automated Unit Testing with Pytest'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personal.stats.map((stat) => (
              <div
                key={stat.label}
                className={`p-6 rounded-2xl border transition-all transform hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/40 border-slate-800 hover:border-cyan-500/40'
                    : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm'
                }`}
              >
                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-1 font-mono">
                  {stat.value}
                </div>
                <div className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                  {stat.label}
                </div>
                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {stat.description}
                </div>
              </div>
            ))}

            {/* Quick Education Callout Box */}
            <div className={`col-span-2 p-5 rounded-2xl border flex items-center gap-4 ${
              darkMode ? 'bg-indigo-950/20 border-indigo-900/40' : 'bg-indigo-50/70 border-indigo-200'
            }`}>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {education[0].degree}
                </h4>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {education[0].institution} • <strong className="text-cyan-400">{education[0].score}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`p-6 rounded-2xl border transition-all hover:scale-[1.02] ${
                darkMode
                  ? 'bg-slate-900/30 border-slate-800/80 hover:border-slate-700'
                  : 'bg-slate-50/80 border-slate-200/80 hover:border-indigo-200 shadow-sm'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {pillar.title}
              </h4>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
