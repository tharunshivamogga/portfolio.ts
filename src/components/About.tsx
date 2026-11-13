import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code, Server, Database, Cloud, CheckCircle2, Award } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Code,
      title: 'Modern Frontend & UX',
      description: 'Crafting responsive, accessible, component-driven interfaces using React, TypeScript, and modern styling architectures.'
    },
    {
      icon: Server,
      title: 'Resilient Backend Systems',
      description: 'Designing scalable microservices, REST & GraphQL endpoints, event-driven architectures, and high-throughput workflows.'
    },
    {
      icon: Database,
      title: 'Data Modeling & Caching',
      description: 'Structuring normalized & document databases with PostgreSQL, MongoDB, and Redis caching for ultra-low latency.'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud Delivery',
      description: 'Containerizing services with Docker, orchestrating continuous integration pipelines, and deploying automated cloud workloads.'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Turning Complex Problems Into Elegant Code
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A look into who I am, my software engineering background, and the engineering principles I live by.
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
                Engineering with empathy, performance, and durability.
              </h3>
              <p className={`leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {personal.bio}
              </p>
              <p className={`leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Whether building user-facing web applications or mission-critical backend APIs, I prioritize maintainable architectures, test coverage, and documentation. I thrive in cross-functional environments where fast iterations meet reliable software practices.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/40">
                {[
                  'Scalable Microservices & APIs',
                  'Type-safe End-to-End Development',
                  'CI/CD & Automated Testing',
                  'Performance Optimization & Caching',
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
