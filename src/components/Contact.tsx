import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Send, Copy, Check, MessageSquare, Clock, Sparkles, Phone, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Get in Touch with Tharun
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I am actively open to full-time Python Full-Stack & Backend Engineering roles. Feel free to call, email, or send a direct message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Direct Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email with 1-click copy */}
                <div>
                  <label className={`text-xs uppercase tracking-wider font-semibold block mb-2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    Email Address
                  </label>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-indigo-400 hover:text-indigo-300 font-mono text-sm sm:text-base font-semibold truncate flex items-center gap-1.5"
                    >
                      <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                      {personal.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className={`p-2 rounded-lg border transition-all text-xs flex items-center gap-1 cursor-pointer shrink-0 ${
                        copiedEmail
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : darkMode
                          ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                      }`}
                      title="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Phone with 1-click call and copy */}
                <div>
                  <label className={`text-xs uppercase tracking-wider font-semibold block mb-2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    Phone Number
                  </label>
                  <div className="flex items-center gap-2">
                    <a
                      href={personal.social.phone}
                      className="text-emerald-400 hover:text-emerald-300 font-mono text-sm sm:text-base font-semibold truncate flex items-center gap-1.5"
                    >
                      <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                      {personal.phone}
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className={`p-2 rounded-lg border transition-all text-xs flex items-center gap-1 cursor-pointer shrink-0 ${
                        copiedPhone
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : darkMode
                          ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                      }`}
                      title="Copy phone number"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-xs block ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Location</span>
                    <span className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {personal.location}
                    </span>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-xs block ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Response Time</span>
                    <span className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      Prompt response within 12 - 24 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Profiles Row */}
              <div className="mt-8 pt-6 border-t border-slate-800/40 flex items-center gap-3">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-semibold transition-all ${
                    darkMode
                      ? 'bg-slate-950/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-semibold transition-all ${
                    darkMode
                      ? 'bg-slate-950/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className={`p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Send a Direct Message
              </h3>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-lg font-bold text-emerald-400 mb-1">Message Initiated!</h4>
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Launching your email client with your message drafted. You can also reach Tharun directly at <strong className="text-emerald-400">{personal.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Hiring Manager / Recruiter"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                          darkMode
                            ? 'bg-slate-950/60 border-slate-800 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                          darkMode
                            ? 'bg-slate-950/60 border-slate-800 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Backend / Full-Stack Role Opportunity"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                        darkMode
                          ? 'bg-slate-950/60 border-slate-800 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Tharun, we reviewed your CardShare & AI Logistics projects and would love to discuss an engineering opportunity..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all resize-none ${
                        darkMode
                          ? 'bg-slate-950/60 border-slate-800 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:opacity-90 shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Tharun</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
