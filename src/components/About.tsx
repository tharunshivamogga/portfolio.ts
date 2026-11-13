import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Server, Database, Code2, TestTube2, CheckCircle2, Award, GraduationCap } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const { personal, education } = portfolioData;

  const pillars = [
    {
      icon: Server,
      title: 'Python Backend & APIs',
      description: 'Architecting clean RESTful services, transactional state machines, and RBAC authentication with Python, Flask, SQLAlchemy, and Pydantic.'
    },
    {
      icon: Database,
      title: 'Relational Schemas & Indexing',
      description: 'Designing normalized (3NF) relational architectures with PostgreSQL & MySQL, eliminating N+1 queries and optimizing query latency through index tuning.'
    },
    {
      icon: Code2,
      title: 'Type-Safe Frontend & Mobile',
      description: 'Crafting responsive user interfaces and mobile applications using React, TypeScript, TanStack Query, Tailwind CSS, and React Native (Expo).'
    },
    {
      icon: TestTube2,
      title: 'Automated Testing & Reliability',
      description: 'Enforcing deterministic logic and preventing regression bugs through comprehensive automated Pytest test suites and Postman API contract verification.'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Profile & Engineering Mindset</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            High-Integrity Software with Strong CS Foundations
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A look into my background, core engineering principles, and focus on deterministic backend systems.
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
                Bridging rigorous relational logic with responsive modern interfaces.
              </h3>
              <p className={`leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {personal.bio}
              </p>
              <p className={`leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Whether engineering a 19-state transaction state machine for fintech, optimizing traveling-salesperson algorithms for dynamic waste collection logistics, or building offline-first mobile ERP systems, I emphasize financial precision, index optimization, and automated test coverage.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/40">
                {[
                  'Zero Floating-Point Financial Precision',
                  'Deterministic State Machines & RBAC',
                  'Relational Schema Normalization & Indexing',
                  'Automated Unit Testing with Pytest',
                  'Asynchronous Pipelines & Clean REST APIs',
                  'B.E. Computer Science Graduate (8.2 CGPA)'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
                    ? 'bg-slate-900/40 border-slate-800 hover:border-indigo-500/40'
                    : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm'
                }`}
              >
                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-1 font-mono">
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
                  {education[0].institution} • <strong className="text-indigo-400">{education[0].score}</strong>
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
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-5">
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
