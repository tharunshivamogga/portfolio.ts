import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, Building2, CheckCircle } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Professional Experience
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            My engineering track record building production systems, scaling backend APIs, and mentoring teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={`${exp.company}-${idx}`} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:bg-indigo-500 group-hover:scale-125 transition-all shadow-md shadow-indigo-500/40" />

              {/* Date pill for desktop aligned left */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-28 text-xs font-mono font-semibold text-indigo-400">
                {exp.period}
              </div>

              {/* Experience Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                {/* Mobile Period Tag */}
                <div className="sm:hidden inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>

                {/* Role and Company */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-indigo-400">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2.5 mb-6">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="pt-4 border-t border-slate-800/40 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs font-mono px-2.5 py-1 rounded-md ${
                        darkMode
                          ? 'bg-slate-950/60 text-slate-300 border border-slate-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
