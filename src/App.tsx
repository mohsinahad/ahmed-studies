import { useState } from 'react';
import Physics from './subjects/Physics';
import Maths from './subjects/Maths';
import SocialStudies from './subjects/SocialStudies';
import Chemistry from './subjects/Chemistry';
import AI from './subjects/AI';
import ELA from './subjects/ELA';
import Finance from './subjects/Finance';
import IslamicStudies from './subjects/IslamicStudies';
import AnalyticsDashboard from './components/AnalyticsDashboard';

type Subject = 'home' | 'physics' | 'maths' | 'social-studies' | 'chemistry' | 'ai' | 'ela' | 'finance' | 'islamic-studies' | 'analytics';

const subjects = [
  {
    id: 'physics' as const,
    label: 'Physics',
    description: 'Motion, Forces, Energy & Waves',
    icon: '⚡',
    accent: 'from-sky-500 to-blue-600',
    border: 'border-sky-700',
    glow: 'hover:shadow-sky-500/20',
  },
  {
    id: 'maths' as const,
    label: 'Maths',
    description: 'Geometry & Problem Solving',
    icon: '📐',
    accent: 'from-violet-500 to-purple-600',
    border: 'border-violet-700',
    glow: 'hover:shadow-violet-500/20',
  },
  {
    id: 'social-studies' as const,
    label: 'Social Studies',
    description: 'History, Geography & Economics',
    icon: '🌍',
    accent: 'from-amber-500 to-orange-600',
    border: 'border-amber-700',
    glow: 'hover:shadow-amber-500/20',
  },
  {
    id: 'chemistry' as const,
    label: 'Chemistry',
    description: 'Atoms, Reactions & the Periodic Table',
    icon: '⚗️',
    accent: 'from-emerald-500 to-teal-600',
    border: 'border-emerald-700',
    glow: 'hover:shadow-emerald-500/20',
  },
  {
    id: 'ai' as const,
    label: 'AI & Prompting',
    description: 'How AI works and how to prompt it',
    icon: '🤖',
    accent: 'from-violet-500 to-purple-600',
    border: 'border-violet-700',
    glow: 'hover:shadow-violet-500/20',
  },
  {
    id: 'ela' as const,
    label: 'English (ELA)',
    description: 'Grammar, Literature & Writing',
    icon: '📖',
    accent: 'from-rose-500 to-pink-600',
    border: 'border-rose-700',
    glow: 'hover:shadow-rose-500/20',
  },
  {
    id: 'finance' as const,
    label: 'Finance',
    description: 'Stocks, Bonds, ETFs & Investing',
    icon: '💰',
    accent: 'from-green-500 to-emerald-600',
    border: 'border-green-700',
    glow: 'hover:shadow-green-500/20',
  },
  {
    id: 'islamic-studies' as const,
    label: 'Islamic Studies',
    description: 'Quran, Kalimas, Faith & Worship',
    icon: '☾',
    accent: 'from-emerald-600 to-teal-700',
    border: 'border-emerald-800',
    glow: 'hover:shadow-emerald-500/20',
  },
];

export default function App() {
  const [subject, setSubject] = useState<Subject>('home');

  if (subject === 'physics') return <Physics onBack={() => setSubject('home')} />;
  if (subject === 'maths') return <Maths onBack={() => setSubject('home')} />;
  if (subject === 'social-studies') return <SocialStudies onBack={() => setSubject('home')} />;
  if (subject === 'chemistry') return <Chemistry onBack={() => setSubject('home')} />;
  if (subject === 'ai') return <AI onBack={() => setSubject('home')} />;
  if (subject === 'ela') return <ELA onBack={() => setSubject('home')} />;
  if (subject === 'finance') return <Finance onBack={() => setSubject('home')} />;
  if (subject === 'islamic-studies') return <IslamicStudies onBack={() => setSubject('home')} />;
  if (subject === 'analytics') return <AnalyticsDashboard onBack={() => setSubject('home')} />;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Ahmed's Studies</h1>
      <p className="text-slate-400 mb-4 text-sm">Choose a subject to start learning</p>
      <button
        onClick={() => setSubject('analytics')}
        className="mb-10 px-4 py-2 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 text-xs transition"
      >
        View Progress Stats
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
        {subjects.map((s) => (
          <button
            key={s.id}
            onClick={() => setSubject(s.id)}
            className={`
              flex flex-col items-center gap-4 p-8 rounded-2xl
              bg-slate-900 border ${s.border}
              hover:bg-slate-800 hover:shadow-xl ${s.glow}
              transition-all duration-200 cursor-pointer text-left
            `}
          >
            <div className={`text-4xl w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} shadow-lg`}>
              {s.icon}
            </div>
            <div>
              <div className="text-white font-semibold text-base">{s.label}</div>
              <div className="text-slate-400 text-xs mt-1">{s.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
