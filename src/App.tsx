import { useState } from 'react';
import Physics from './subjects/Physics';
import Maths from './subjects/Maths';
import SocialStudies from './subjects/SocialStudies';
import Chemistry from './subjects/Chemistry';

type Subject = 'home' | 'physics' | 'maths' | 'social-studies' | 'chemistry';

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
];

export default function App() {
  const [subject, setSubject] = useState<Subject>('home');

  if (subject === 'physics') return <Physics onBack={() => setSubject('home')} />;
  if (subject === 'maths') return <Maths onBack={() => setSubject('home')} />;
  if (subject === 'social-studies') return <SocialStudies onBack={() => setSubject('home')} />;
  if (subject === 'chemistry') return <Chemistry onBack={() => setSubject('home')} />;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Ahmed's Studies</h1>
      <p className="text-slate-400 mb-12 text-sm">Choose a subject to start learning</p>
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
