import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, Building2, CheckCircle, GraduationCap, Award, MapPin } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const { experiences, education } = portfolioData;
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'education'>('all');

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Academics</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Experience & Education
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            My industry engineering internship and foundational Computer Science academic milestones.
          </p>

          {/* Tab Filter */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Journey' },
              { id: 'work', label: 'Work Experience' },
              { id: 'education', label: 'Education' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'all' | 'work' | 'education')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : darkMode
                    ? 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Work Experience Stream */}
        {(activeTab === 'all' || activeTab === 'work') && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-5 h-5 text-indigo-400" />
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Professional Experience
              </h3>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
              {experiences.map((exp, idx) => (
                <div key={`${exp.company}-${idx}`} className="relative pl-6 sm:pl-8 group">
                  {/* Indicator Dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:bg-indigo-500 group-hover:scale-125 transition-all shadow-md shadow-indigo-500/40" />

                  {/* Desktop Period Tag */}
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

                    {/* Role, Company, Location */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {exp.role}
                        </h4>
                        <div className="flex items-center gap-3 text-sm font-semibold text-indigo-400 mt-0.5">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-slate-400 font-normal text-xs">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bullet Points */}
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

                    {/* Tech Pills */}
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
        )}

        {/* Education Stream */}
        {(activeTab === 'all' || activeTab === 'education') && (
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Education & Academic Qualifications
              </h3>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
              {education.map((edu, idx) => (
                <div key={`${edu.institution}-${idx}`} className="relative pl-6 sm:pl-8 group">
                  {/* Indicator Dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-purple-500 group-hover:bg-purple-500 group-hover:scale-125 transition-all shadow-md shadow-purple-500/40" />

                  {/* Desktop Period Tag */}
                  <div className="hidden sm:block absolute -left-36 top-1 text-right w-28 text-xs font-mono font-semibold text-purple-400">
                    {edu.period}
                  </div>

                  {/* Education Card */}
                  <div
                    className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                      darkMode
                        ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                        : 'bg-white border-slate-200 shadow-sm'
                    }`}
                  >
                    {/* Mobile Period Tag */}
                    <div className="sm:hidden inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-purple-400 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>

                    {/* Degree and Institution */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className={`text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {edu.degree}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
                          <span>{edu.institution}</span>
                          <span>•</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      {/* CGPA Score Badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30">
                        <Award className="w-3.5 h-3.5" />
                        {edu.score}
                      </span>
                    </div>

                    {/* Highlights */}
                    {edu.highlights && (
                      <ul className="space-y-1.5 pt-2">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-purple-400">›</span>
                            <span className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
