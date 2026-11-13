import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Trash2 } from 'lucide-react';

interface TerminalProps {
  darkMode: boolean;
}

interface CommandLog {
  id: string;
  command: string;
  output: string | string[];
}

export const Terminal: React.FC<TerminalProps> = ({ darkMode }) => {
  const { terminalCommands } = portfolioData;
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: [
        '🚀 Welcome to my interactive developer shell!',
        'Type "help" to see available commands or click the shortcut buttons below.'
      ]
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableCommands = ['help', 'bio', 'skills', 'projects', 'experience', 'stats', 'hire', 'clear'];

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let output: string | string[];

    if (trimmed in terminalCommands) {
      output = terminalCommands[trimmed];
    } else if (trimmed === 'ls' || trimmed === 'dir') {
      output = 'about.txt   skills.json   projects.ts   experience.md   resume.pdf';
    } else if (trimmed === 'whoami') {
      output = `${portfolioData.personal.name} (${portfolioData.personal.role})`;
    } else if (trimmed === 'date') {
      output = new Date().toUTCString();
    } else if (trimmed.startsWith('echo ')) {
      output = trimmed.substring(5);
    } else if (trimmed === 'sudo' || trimmed.startsWith('sudo ')) {
      output = 'Permission denied: With great power comes great responsibility! Use "hire" instead ;)';
    } else {
      output = `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: trimmed,
        output
      }
    ]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Sandbox</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Interactive Developer Terminal
          </h2>
          <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Prefer command-line interfaces? Query my background, tech stack, and experience directly from this simulated terminal.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden font-mono text-sm">
          {/* Terminal Window Header Bar */}
          <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="text-xs text-slate-400 ml-2 font-sans font-medium flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
                alex@portfolio-box ~ zsh
              </span>
            </div>

            <button
              onClick={() => setHistory([])}
              className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 transition-colors px-2 py-1 rounded bg-slate-800/60"
              title="Clear terminal output"
            >
              <Trash2 className="w-3 h-3" />
              <span>Clear</span>
            </button>
          </div>

          {/* Terminal Output Area */}
          <div
            className="p-5 sm:p-6 min-h-[320px] max-h-[460px] overflow-y-auto space-y-4"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((log) => (
              <div key={log.id} className="space-y-1.5">
                {/* Command Line */}
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-indigo-400">~/portfolio</span>
                  <span className="text-slate-500">$</span>
                  <span className="text-white font-semibold">{log.command}</span>
                </div>

                {/* Output */}
                <div className="text-slate-300 pl-4 border-l-2 border-slate-800 space-y-1">
                  {Array.isArray(log.output) ? (
                    log.output.map((line, i) => (
                      <div key={i} className="text-slate-300 leading-relaxed">
                        {line}
                      </div>
                    ))
                  ) : (
                    <div className="text-slate-300 leading-relaxed">{log.output}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Active Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-emerald-400">➜</span>
              <span className="text-indigo-400">~/portfolio</span>
              <span className="text-slate-500">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command (e.g. 'help', 'skills', 'hire')..."
                className="flex-1 bg-transparent border-none outline-none text-emerald-400 placeholder:text-slate-600 font-mono caret-emerald-400 text-sm"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                type="submit"
                className="text-xs text-slate-400 hover:text-white px-2 py-1 bg-slate-900 border border-slate-800 rounded flex items-center gap-1"
              >
                <span>Run</span>
                <CornerDownLeft className="w-3 h-3" />
              </button>
            </form>

            <div ref={terminalEndRef} />
          </div>

          {/* Quick Clickable Suggestions */}
          <div className="bg-slate-900/60 p-3 px-5 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 mr-1">Quick clicks:</span>
            {availableCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="text-xs px-2.5 py-1 rounded bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white transition-all transform hover:scale-105 cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
